import { useStaticQuery, graphql } from "gatsby";
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
    const data = useStaticQuery(graphql`
    query {
        sections: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/sections/" }, frontmatter: { title: { eq: "about" } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`);
    const sectionData = data.sections.edges;

    return (
        <section id="about">
            <h2>About Me</h2>
            <PanelStyle>
                {sectionData && sectionData.map(({ node }, i) => {
                    const { html } = node;
                    return (
                        <div dangerouslySetInnerHTML={{ __html: html }} key={i} />
                    );
                })}
                <PictureStyle>
                    <StaticImage
                        className="img"
                        src="../../images/profile.jpeg"
                        width={500}
                        alt="Headshot"
                    />
                </PictureStyle>
            </PanelStyle>
        </section>
    )
}

export default About
