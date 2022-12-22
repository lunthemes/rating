import styled from '@emotion/styled';
import {
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
  FormControlLabel as MuiFormControlLabel,
  FormControl as MuiFormControl,
  FormLabel as MuiFormLabel,
} from '@mui/material';
import { theme } from '@/styles/theme';

export const Radio = styled(MuiRadio)`
  .MuiFormControlLabel-root {
    margin: 0;
  }
  
  &.MuiRadio-root {
    width: 50px;
    height: 50px;
    background-color: ${theme.palette.primary.light};

    svg {
      display: none;
    }

    &:hover {
      background-color: ${theme.palette.colors.gray[120]};
    }

    &.Mui-checked {
      background-color: ${theme.palette.primary.main};
    }
  }
`;

export const FormControl = styled(MuiFormControl)`
  &.MuiFormControl-root {
    display: flex;
    justify-content: space-between;
  }
`;

export const FormLabel = styled(MuiFormLabel)``;

export const FormControlLabel = styled(MuiFormControlLabel)`
  &.MuiFormControlLabel-root {
    position: relative;
    margin: 0;
    padding: 0;
  }
  .MuiTypography-root {
    position: absolute;
    left: calc(50% - 5px);
  }
`;

export const RadioGroup = styled(MuiRadioGroup)`
  &.MuiFormGroup-root {
    display: flex;
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  .MuiFormGroup-root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;