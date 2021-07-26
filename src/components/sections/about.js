import * as React from "react"
import styled from 'styled-components';

// styles
const PageStyle = styled.div`
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
`;
const HeadingStyle = styled.h1`
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
`;
const HeadingAccentStyle = styled.span`
  color: "#663399",
`;

const ParagraphStyle = styled.p`
  marginBottom: 48,
`;

// markup
const About = () => {
    return (
        <PageStyle>
            <HeadingStyle>
                Hi, my name is
                <br />
                <HeadingAccentStyle>Daniel Caris</HeadingAccentStyle>
            </HeadingStyle>
            <ParagraphStyle>
                I'm a Software Engineer based in Brisbane, QLD, Australia specializing in building systems in .NET.
                <span role="img" aria-label="Sunglasses smiley emoji">
                    😎
                </span>
            </ParagraphStyle>
        </PageStyle>
    )
}

export default About
