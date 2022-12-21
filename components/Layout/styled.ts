import styled from '@emotion/styled';

// import { LEFT_SPACING, SECTION_HEIGHT } from './constants';

export const MainContainer = styled.div`
background-color: #212731;
border-radius: 30px;
height: 412px;
width: 402px;
padding: 30px;

  .container {
    border: 1px solid #e0e0e0;
    position: relative;
    box-sizing: border-box;

    &::before {
      content: '';
      display: block;
      height: 1px;
      width: 400px;
      background: #e0e0e0;
      position: absolute;
      left: 0;
      transform: translateY(100%);
    }
  }
`;

export const Grid = styled.div`
  
`;