import * as React from "react"
import { Link } from 'gatsby';
import styled from "styled-components";
import { navLinks } from '../reference_data';
import { FaBorderStyle } from 'react-icons/fa';

const NavStyle = styled.header`
    ${({ theme }) => theme.mixins.flexBetween};
    position: fixed;
    top: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    transition: var(--transition);
    color: var(--primary-text);
    background-color: var(--primary);
`;

const LogoStyle = styled.div`
    a {
        color: var(--primary-text);
        width: 42px;
        height: 42px;
        text-decoration: none;
        font-family: var(--font-sans);
        font-weight: bold;
    }

    svg {
        fill: var(--primary-text);
        transition: var(--transition);
        user-select: none;
        position: absolute;
        height: 3.5em;
        width: 3.5em;
        margin-top: -20px;
        margin-left: -20px;
        z-index: -1;
    }
`;

const LinksStyle = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
    ol {
        ${({ theme }) => theme.mixins.flexBetween};
        padding: 0;
        margin: 0;
        list-style: none;
        li {
            margin: 0 5px;
            position: relative;
            counter-increment: item 1;
            font-size: var(--fz-subheading);
            a {
                color: var(--primary-text);
                text-decoration: none;
                padding: 10px;
                &:before {
                    content: '0' counter(item) '.';
                    margin-right: 5px;
                    color: var(--primary-light);
                    font-size: var(--fz-subheading);
                    text-align: right;
                }
            }
        }
    }
`;

const Nav = () => {

    return (
        <NavStyle>
            <LogoStyle>
                <FaBorderStyle />
                <a href="/" aria-label="home">
                    DC
                </a>
            </LogoStyle>
            <LinksStyle>
                <ol>
                    {navLinks &&
                        navLinks.map(({ url, name }, i) => (
                            <li key={i}>
                                <Link to={url}>{name}</Link>
                            </li>
                        ))}
                </ol>
            </LinksStyle>
        </NavStyle>
    );
}

export default Nav;