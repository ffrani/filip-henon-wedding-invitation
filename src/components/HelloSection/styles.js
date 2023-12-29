import { css } from '@emotion/core';

export const styWrapper = css`
  .sub-title {
    color: rgb(168, 131, 89);
    letter-spacing: 1px;
    line-height: 20px;
    font-family: 'Kavoon', serif;
    font-size: 20px;
    line-height: 40px;
  }

  p {
    font-size: 30px;
    margin-top: 16px;
    font-family: 'Kavoon', serif;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 15px;
      margin: 0 0 8px 0;
      line-height: 20px;
      font-family: 'Kavoon', serif;
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
