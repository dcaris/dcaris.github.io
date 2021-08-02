import * as React from "react"
import styled from "styled-components";
import { socialMedia } from '../reference_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

// This adds FontAwesome Brand icons to the local library in order to use
library.add(fab);

const FooterStyle = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const SocialStyle = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto 10px;
    color: var(--primary-dark);
    ul {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 0;
        margin: 0;
        list-style: none;
        a {
            padding: 10px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyle>
            <SocialStyle>
                <ul>
                    {socialMedia && socialMedia.map(({ name, url }, i) => {
                        return (
                            <li key={i}>
                                <a href={url}>
                                    <FontAwesomeIcon icon={["fab", name.toLowerCase()]} size="lg" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </SocialStyle>
            <span>Designed and Built by Daniel Caris</span>
        </FooterStyle>
    );
}

export default Footer;