import Typography from '@mui/material/Typography';

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
  color: white;
  font-size: 28px;
`;

export const ResultInfo = styled.div`
  padding: 8px 25px;
  border-radius: 20px;
  margin-top: 32px;
  margin-bottom: 25px;
  background-color: #272E38;
  color: #FB7612;
  font-size: 14px;
  letter-spacing: 1px;
`;

export const DescriptionText = styled(Typography)`
  text-align: center;
  color: white;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.75;
`;