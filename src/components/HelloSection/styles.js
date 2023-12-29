import { css } from '@emotion/core';

export const styWrapper = css`
  .sub-title {
    color: rgb(168, 131, 89);
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    font-family: 'Cookie', cursive;
    font-size: 35px;
    line-height: 40px;
  }

  p {
    font-size: 36px;
    margin-top: 16px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 21px;
      margin: 0 0 8px 0;
      line-height: 20px;
    }

    p {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
