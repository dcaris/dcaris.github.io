import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const About = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Hi, my name is
        <br />
        <span style={headingAccentStyles}>Daniel Caris</span>
      </h1>
      <p style={paragraphStyles}>
        I'm a Software Engineer based in Brisbane, QLD, Australia specializing in building systems in .NET. 
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
    </main>
  )
}

export default About
