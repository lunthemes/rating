import Typography from '@mui/material/Typography';
import { theme } from '@/styles/theme';

import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  margin-top: 10px;
`;

export const Title = styled(Typography)`
  margin-bottom: 10px;
  color: ${theme.palette.colors.white};
  font-size: 28px;
`;

export const ResultInfo = styled.div`
  padding: 8px 25px;
  border-radius: 20px;
  margin-top: 32px;
  margin-bottom: 25px;
  background-color: ${theme.palette.primary.light};
  color: ${theme.palette.primary.main};
  font-size: 15px;
  letter-spacing: 0.5px;
`;

export const DescriptionText = styled(Typography)`
  text-align: center;
  color: ${theme.palette.colors.gray[100]};
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 1.75;
`;