import { FC } from 'react';
import RatingForm from '@/components/RatingForm';
import RatingResult from '@/components/RatingResults'
import { useRating } from '@/pages/providers/RatingProvider';

import * as S from './styled'

const RatingContainer: FC<React.PropsWithChildren<unknown>> = () => {
  const [{ submitValue }] = useRating();

  return (
      <S.MainContainer>
        { !submitValue ? (
          <RatingForm />
        ) : (
          <RatingResult />
        )}
      </S.MainContainer>
  );
};

export default RatingContainer;



