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

const Work = () => {
    return (
        <PageStyle>
            <HeadingStyle>Where I Have Worked</HeadingStyle>
            <ParagraphStyle>
                Virtus Health
            </ParagraphStyle>
            <ParagraphStyle>
                SJK Consulting
            </ParagraphStyle>
        </PageStyle>
    )
}

export default Work
