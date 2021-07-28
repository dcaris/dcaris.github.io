import { css } from 'styled-components';

const variables = css`
  :root {
    --primary: #5e35b1;
    --primary-light: #9162e4;
    --primary-dark: #280680;
    --primary-text: #ffffff;
    --secondary: #d1c4e9;
    --secondary-light: #fff7ff;
    --secondary-dark: #a094b7;
    --secondary-text: #000000;
    --font-sans: Raleway, sans-serif;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default variables;