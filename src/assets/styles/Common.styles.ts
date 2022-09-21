import styled, { css } from 'styled-components';

export enum Colors {
  gold1 = '#ffd79a',
  gold2 = '#f9e2be',
  red1 = '#ff9292',
}

export enum Spacing {
  s5 = '5px',
  s10 = '10px',
  s15 = '15px',
  s20 = '20px',
  s25 = '20px',
}

export enum MediaMaxSize {
  mobile = '600px',
  tablet = '800px',
}

export const PageWidthGuard = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Container = styled.div`
  padding: ${Spacing.s10};
  border-radius: 4px;
  background-color: #2f2f2f;
`;

export const InputLook = css`
  background-color: #2f2f2f;
  border: 1px solid #1f1f1f;
  color: #b7b7b7;
  outline: none;
  padding: 10px 15px;
  border-radius: 0 4px 4px 4px;
  width: 100%;
  font-size: 1rem;
`;
