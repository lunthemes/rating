import React, { FC } from 'react';
import Image from 'next/image';
import { RadioButton } from "../RadioButton";
import { useRating } from '../../pages/providers/RatingProvider';

import * as S from './styled'

const RatingForm: FC<React.PropsWithChildren<unknown>> = () => {

  const [{ data, score }, { handleGetValue, handleSubmit }] = useRating();

  return (
    <>
      <S.ImageWrapper>
        <Image
          src={'/icons/icon-star.svg'}
          alt={'star'}
          width={20}
          height={18} 
        />
      </S.ImageWrapper>
      <S.Title>How did we do</S.Title>
      <S.DescriptionText>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering
      </S.DescriptionText>
      <S.RadioContainer>
        <RadioButton
          data={data}
          label={''}
          formControlLabelProps={{
            onChange: (e) => handleGetValue((e.target as HTMLInputElement).value),
          }}
        />
      </S.RadioContainer>
      <S.SubmitButton
        onClick={handleSubmit}
        variant="contained"
        disabled={!score ?? true}
      >
        Submit
      </S.SubmitButton>
    </>
  );
};

export default RatingForm;