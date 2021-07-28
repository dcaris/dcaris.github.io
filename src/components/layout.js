import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import { Head } from '@components';
import { theme, GlobalStyle } from '@styles';

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({ children, location }) => {
    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    return (
        <>
            <Head />

            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <ContentStyle>
                        <div id="content">
                            {children}
                        </div>
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