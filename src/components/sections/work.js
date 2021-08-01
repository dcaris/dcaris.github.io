import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components";

const CompanyTitleStyle = styled.h3`
    margin: 0 0 10px 4px;
    color: var(--primary-light);
    font-family: var(--font-sans);
    font-size: var(--fz-subtitle);
    font-weight: bold;
    
    @media (max-width: 480px) {
        margin: 0 0 10px 2px;
    }

    a {
        text-decoration: none;
        color: var(--primary-light);
    }
`;

const Work = () => {
    const data = useStaticQuery(graphql`
    query {
        jobs: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/jobs/" } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        # Assumes you're using title in your frontmatter.
                        title
                        company
                        location
                        range
                        url
                    }
                }
            }
        }
    }
`);
    const jobsData = data.jobs.edges;

    return (
        <section>
            <h2>Where I Have Worked</h2>
            {jobsData && jobsData.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { title, url, company, range, location } = frontmatter;

                return (
                    <div>
                        <CompanyTitleStyle>{url && url.length > 0
                            ? <a href={url}>{company}</a>
                            : company
                        }
                        </CompanyTitleStyle>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                );
            })}
        </section>
    )
}

export default Work
