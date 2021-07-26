import { css } from 'styled-components';

const mixins = {
    flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

    flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
    fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  `,

    resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
}

export default mixins;