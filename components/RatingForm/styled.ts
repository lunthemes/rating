import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { theme } from '@/styles/theme';

import styled from '@emotion/styled';

export const RadioContainer = styled.div`
  margin: 30px 0;
`;

export const ImageWrapper = styled.div`
  width: fit-content;
  padding: 15px 15px 14px 15px;
  border-radius: 26px;
  background-color: ${theme.palette.primary.light};
  margin-bottom: 20px;
`;

export const Title = styled(Typography)`
  color: white;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const DescriptionText = styled(Typography)`
  color: ${theme.palette.colors.gray[100]};
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 1.75;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 9px;
  border-radius: 26px;
  font-size: 18px;
  letter-spacing: 1px;
  background: #FB7612;
  color: ${theme.palette.colors.white};

  &:hover {
    background-color: ${theme.palette.colors.white};
    color: ${theme.palette.primary.main};
  }

  &.Mui-disabled {
    color: ${theme.palette.colors.white};
    background-color: ${theme.palette.primary.light};
  }
`;