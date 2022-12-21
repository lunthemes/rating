import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import styled from '@emotion/styled';

export const RadioContainer = styled.div`
  margin: 30px 0;
`;

export const ImageWrapper = styled.div`
  width: fit-content;
  padding: 15px 15px 14px 15px;
  border-radius: 26px;
  background-color: #272E38;
  margin-bottom: 20px;
`;

export const Title = styled(Typography)`
  color: white;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const DescriptionText = styled(Typography)`
  color: white;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.75;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 9px;
  border-radius: 26px;
  font-size: 18px;
  letter-spacing: 3px;
  background: #FB7612;
  color: #ffffff;

  &:hover {
    background: #fff;
    color: #FB7612;
  }

  &.Mui-disabled {
    color: #fff;
  }
`;