import * as React from "react"
import styled from 'styled-components';

// styles
const PageStyle = styled.section`
  ${({theme}) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
`;
const HeadingStyle = styled.h1`
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
`;
const HeadingAccentStyle = styled.span`
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
    margin: 0 0 20px 2px;
    }
`;

const ParagraphStyle = styled.p`
  marginBottom: 48
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
            <HeadingStyle>
                <HeadingAccentStyle>And I build "stuff" with my hands</HeadingAccentStyle>
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
