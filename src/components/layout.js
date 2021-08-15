import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { Head, Nav, Footer } from '@components';
import { theme, GlobalStyle } from '@styles';

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({ children }) => {
    return (
        <>
            <Head />

            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Nav />
                    <ContentStyle>
                        <div id="content">
                            {children}
                        </div>
                        <Footer />
                    </ContentStyle>
                </ThemeProvider>
            </div>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};

export default Layout;