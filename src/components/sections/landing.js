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

const ParagraphStyle = styled.p`
  marginBottom: 48
`;

// markup
const Landing = () => {
    return (
        <PageStyle>
            <h3>
                Hi, my name is
            </h3>
            <h1>
                Daniel Caris
            </h1>
            <h2 class="altHeading">
                I build stuff with my hands
            </h2>
            <ParagraphStyle>
                I'm a Software Engineer based in Brisbane, QLD, Australia specializing in building systems in .NET.
                <span role="img" aria-label="Sunglasses smiley emoji">
                    😎
                </span>
            </ParagraphStyle>
        </PageStyle>
    )
}

export default Landing
