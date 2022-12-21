import React, { FC } from 'react';
import Image from 'next/image';
import { useRating } from '@/pages/providers/RatingProvider';

import * as S from './styled'

const RatingResult: FC<React.PropsWithChildren<unknown>> = () => {

  const [{ submitValue, scoreCount }] = useRating();

  return (
    <S.StyledContainer>
      <S.ImageWrapper>
        <Image
          src={'/icons/illustration-thank-you.svg'}
          alt={'star'}
          width={140}
          height={100} 
        />
      </S.ImageWrapper>
      <S.ResultInfo>
        You selected {submitValue} of { scoreCount }
      </S.ResultInfo>
      <S.Title>Thank you</S.Title>
      <S.DescriptionText>
        We apreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to gei in touch!
      </S.DescriptionText>
    </S.StyledContainer>
  );
};

export default RatingResult;