import * as React from "react"
import styled from "styled-components";
import { socialMedia } from '../reference_data';
import * as Icons from "react-icons/fa";

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

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const GetReactIcon = ({icon}) => {
    const IconComponent = Icons[icon];

    if (!IconComponent){
        return <Icons.FaBeer />
    }

    return <IconComponent />
}

const Footer = () => {
    return (
        <FooterStyle>
            <SocialStyle>
                <ul>
                    {socialMedia && socialMedia.map(({ url, icon }, i) => {
                        return (
                            <li key={i}>
                                <a href={url}>
                                    <GetReactIcon icon={icon} />
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