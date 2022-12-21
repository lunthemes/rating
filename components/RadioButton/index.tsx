import React, { FC } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import {
  RadioProps,
  FormControlLabelProps,
  FormControlProps,
} from '@mui/material';

import * as S from './styled';

type RadioButtonProps = {
  data?: { label: string; value: string | null }[];
  radioProps?: RadioProps;
  formControlProps?: FormControlProps;
  formControlLabelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
  label: string
}

export const RadioButton: FC<React.PropsWithChildren<RadioButtonProps>> = ({
  data,
  radioProps,
  formControlProps,
  formControlLabelProps,
  label,
}) => {
  return (
    <S.FormControl
      {...formControlProps}
    >
      <S.InputContainer>
        {label && (
          <S.FormLabel>
            {label}
          </S.FormLabel>
        )}
        <RadioGroup>
          {data?.map(({ value, label }) => {
            return (
              <S.FormControlLabel
                {...formControlLabelProps}
                value={value}
                control={<S.Radio {...radioProps} />}
                label={label}
                key={value}
              />
            );
          })}
        </RadioGroup>
      </S.InputContainer>
    </S.FormControl>
  );
};