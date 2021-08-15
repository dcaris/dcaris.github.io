import { useStaticQuery, graphql } from "gatsby";
import * as React from "react"

// markup
const Contact = () => {
    const data = useStaticQuery(graphql`
    query {
        sections: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/sections/" }, frontmatter: { title: { eq: "contact" } } }
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
        <section id="contact">
            <h2>
                Get In Touch
            </h2>
            {sectionData && sectionData.map(({ node }, i) => {
                const { html } = node;
                return (
                    <div dangerouslySetInnerHTML={{ __html: html }} key={i} />
                );
            })}
        </section>
    )
}

export default Contact
