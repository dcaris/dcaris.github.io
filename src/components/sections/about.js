import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components";

const PanelStyle = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
`;

const ParagraphStyle = styled.p`
    display: block;
`;

const PictureStyle = styled.div`
    position: relation;
    max-width: 300px;

    @media (max-width: 768px) {
        margin: 50px auto 0;
        width: 70%;
    }

    display: block;
`;

// markup
const About = () => {
    return (
        <section>
            <h2>About Me</h2>
            <PanelStyle>
                <ParagraphStyle>
                    Hey, my name is Daniel Caris and I am a Software Developer from Brisbane, Australia.
                    <br />
                    I studied Information Technology at QUT and currently work at Virtus Health as a Senior Software Developer. .NET stack is my specialty, however am enjoying delving into the Node.js and Javascript world.
                    In my spare time, I'm either looking after my children, being a fantastic husband, trying to be a handyman around the house, surfing, or watching sport of any time. I'm crazy about NRL, AFL, and NFL, but enjoy everything except cricket (I don't like cricket... oh no. I hate it)
                </ParagraphStyle>
                <PictureStyle>
                    <StaticImage
                        src="../../images/profile.jpeg"
                    />
                </PictureStyle>
            </PanelStyle>
        </section>
    )
}

export default About
