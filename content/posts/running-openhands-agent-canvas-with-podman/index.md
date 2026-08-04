---
title: "Running OpenHands Agent Canvas with Podman (and Claude Code)"
date: 2026-08-03
tags: ["openhands", "podman", "claude-code", "ai-agents", "self-hosted"]
summary: "A guide to setting up OpenHands Agent Canvas under rootless Podman, including wiring up Claude Code as the coding agent."
---

[OpenHands](https://github.com/OpenHands/OpenHands) is a self-hosted control panel for running coding agents against your own repos. Most guides assume Docker, so here's what it takes to run it under [Podman](https://podman.io/) instead.

## The project has changed shape recently

If you find an older guide referencing a command like this, it's out of date:

```fish
podman run -it --rm \
  -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:0.43-nikolaik \
  ... \
  docker.all-hands.dev/all-hands-ai/openhands:0.43
```

That's the pre-rewrite architecture. Two things changed:

1. **The GitHub org renamed** from `All-Hands-AI` to `OpenHands` in October 2025, moving image paths from `docker.all-hands.dev` / `ghcr.io/all-hands-ai/...` to `ghcr.io/openhands/...`.
2. **OpenHands 1.0 was a re-architecture, not a version bump.** The old pattern — a main `openhands` container spinning up a separate `runtime:*-nikolaik` sandbox container per conversation — is gone. The current product is [**Agent Canvas**](https://www.openhands.dev/product/canvas): a single container, no separate sandbox image, no `SANDBOX_RUNTIME_CONTAINER_IMAGE` env var.

## The Podman setup

Agent Canvas mounts two things: a folder for its own settings/state, and a folder containing the repos you want to work on.

### Fish

```fish
# openhands-create.fish
# Run this ONCE to create the named container. After that, use
# `podman start openhands-agent-canvas` / `podman stop openhands-agent-canvas`.

set -x AGENT_CANVAS_IMAGE ghcr.io/openhands/agent-canvas:latest

set -x PROJECTS_PATH ~/code
mkdir -p $PROJECTS_PATH ~/.openhands

set FLAGS \
    -p 8000:8000 \
    -v ~/.openhands:/home/openhands/.openhands:Z \
    -v "$PROJECTS_PATH:/projects:Z" \
    --security-opt label=disable \
    --userns=keep-id \
    --name openhands-agent-canvas \
    --restart unless-stopped

podman pull "$AGENT_CANVAS_IMAGE"
podman create $FLAGS "$AGENT_CANVAS_IMAGE"
```

### Bash

```bash
#!/usr/bin/env bash
# openhands-create.sh
# Run this ONCE to create the named container. After that, use
# `podman start openhands-agent-canvas` / `podman stop openhands-agent-canvas`.

export AGENT_CANVAS_IMAGE=ghcr.io/openhands/agent-canvas:latest

export PROJECTS_PATH=~/code
mkdir -p "$PROJECTS_PATH" ~/.openhands

FLAGS=(
    -p 8000:8000
    -v ~/.openhands:/home/openhands/.openhands:Z
    -v "$PROJECTS_PATH:/projects:Z"
    --security-opt label=disable
    --userns=keep-id
    --name openhands-agent-canvas
    --restart unless-stopped
)

podman pull "$AGENT_CANVAS_IMAGE"
podman create "${FLAGS[@]}" "$AGENT_CANVAS_IMAGE"
```

Either way, day to day it's the same regardless of shell:

```bash
podman start openhands-agent-canvas
podman stop openhands-agent-canvas
podman logs -f openhands-agent-canvas
```

A few details worth calling out:

- **`podman create`, not `podman run --rm`.** Without `--rm`, and using `create` instead of `run`, the container persists between sessions rather than being thrown away on exit.

- **`--userns=keep-id` avoids rootless permission errors.** Rootless Podman maps container users to unprivileged host UIDs by default, which can leave mounted folders like `~/.openhands` looking like they belong to someone else from inside the container. This flag keeps the container's user matched to yours, so the mounted folders stay writable.

- **`:Z` on the volume mounts** relabels them for SELinux. Harmless if you're not on an SELinux-enforcing distro; necessary if you are.

- **Point `PROJECTS_PATH` at wherever your repos actually live.** The container-side path (`/projects`) is just an internal convention and doesn't need to match your host folder name.

## Wiring up Claude Code as the agent

Agent Canvas doesn't call an LLM directly — it talks to coding agents through the [Agent Client Protocol (ACP)](https://docs.openhands.dev/openhands/usage/agent-canvas/acp-agents). That means you can point it at [Claude Code](https://github.com/OpenHands/OpenHands), Codex, or Gemini CLI instead of the built-in agent, and it'll use whatever authentication that tool already has — including an existing subscription, rather than a separate API key.

For Claude Code specifically, the Agent Canvas settings page (**Settings → Agent → Edit agent profile**) has a `CLAUDE_CODE_OAUTH_TOKEN` field with a note: *"Subscription OAuth token for Claude Pro/Max. Run `claude setup-token` in your terminal to get it."*

On a machine where Claude Code is already installed and logged into your subscription:

```fish
claude setup-token
```

Paste the resulting token into that field in Agent Canvas. This uses your existing Claude Pro/Max subscription for the agent's inference cost rather than metering separately against an API key — worth knowing if you're already paying for a plan.

## Useful links

- [OpenHands on GitHub](https://github.com/OpenHands/OpenHands)
- [Agent Canvas overview](https://docs.openhands.dev/openhands/usage/agent-canvas/overview)
- [Agent Canvas first-time setup](https://docs.openhands.dev/openhands/usage/agent-canvas/first-time-setup)
