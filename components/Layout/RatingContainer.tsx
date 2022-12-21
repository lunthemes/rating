import { FC } from 'react';
import RatingForm from '../RatingForm';
import RatingResult from '../RatingResults'
import { useRating } from '../../pages/providers/RatingProvider';

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



