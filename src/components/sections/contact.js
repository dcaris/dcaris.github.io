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
const Contact = () => {
    return (
        <PageStyle>
            <HeadingStyle>
                Get In Touch
            </HeadingStyle>
            <ParagraphStyle>
                Although I am not currently looking for work, feel free to contact me through LinkedIn and I'll try and get back to you!!
            </ParagraphStyle>
        </PageStyle>
    )
}

export default Contact
