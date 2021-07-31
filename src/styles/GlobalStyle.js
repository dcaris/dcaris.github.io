import { createGlobalStyle } from "styled-components";
import variables from './variables';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Droid+Serif');
@import url('https://fonts.googleapis.com/css?family=Raleway');

${variables};

html {
    box-sizing: border-box;
    width: 100%;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--primary);
    color: var(--primary-text);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
    @media (max-width: 480px) {
        font-size: var(--fz-lg);
    }
    &.hidden {
        overflow: hidden;
    }
    &.blur {
        overflow: hidden;
        header {
            background-color: transparent;
        }
        #content > * {
            filter: blur(5px) brightness(0.7);
            transition: var(--transition);
            pointer-events: none;
            user-select: none;
        }
    }
}

#root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
}
main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
    @media (max-width: 1080px) {
        padding: 200px 100px;
    }
    @media (max-width: 768px) {
        padding: 150px 50px;
    }
    @media (max-width: 480px) {
        padding: 125px 25px;
    }
    &.fillHeight {
        padding: 0 150px;
        @media (max-width: 1080px) {
        padding: 0 100px;
        }
        @media (max-width: 768px) {
        padding: 0 50px;
        }
        @media (max-width: 480px) {
        padding: 0 25px;
        }
    }
}
section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    @media (max-width: 768px) {
        padding: 80px 0;
    }
    @media (max-width: 480px) {
        padding: 60px 0;
    }
    h1 {
        margin: 0 0 10px 4px;
        color: white;
        font-family: var(--font-sans);
        font-size: var(--fz-heading);
        font-weight: bold;
        line-height: 1.1;
        
        @media (max-width: 480px) {
            margin: 0 0 10px 2px;
        }
    }
    h2 {
        margin: 0 0 10px 4px;
        color: white;
        font-family: var(--font-sans);
        font-size: var(--fz-title);
        font-weight: bold;
        
        @media (max-width: 480px) {
            margin: 0 0 10px 2px;
        }
    }
    h3 {
        margin: 0 0 10px 4px;
        color: var(--primary-light);
        font-family: var(--font-sans);
        font-size: var(--fz-subtitle);
        font-weight: bold;
        
        @media (max-width: 480px) {
            margin: 0 0 10px 2px;
        }
    }
    p {
        marginBottom: 48,
    }
    .altHeading {
        color: var(--secondary);
    }
}
`;

export default GlobalStyle;