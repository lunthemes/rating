import styled from '@emotion/styled';
import {
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
  FormControlLabel as MuiFormControlLabel,
  FormControl as MuiFormControl,
  FormLabel as MuiFormLabel,
} from '@mui/material';

export const Radio = styled(MuiRadio)`
  .MuiFormControlLabel-root {
    margin: 0;
  }
  
  &.MuiRadio-root {
    width: 50px;
    height: 50px;
    background-color: #272E38;

    svg {
      display: none;
    }

    &:hover {
      background: #7A8998;
    }

    &.Mui-checked {
      background: #FB7612;
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