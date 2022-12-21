import React, { FC, useState, useContext, createContext, PropsWithChildren } from 'react';
import { RatingContextType } from './provider-types'
import { noop } from '@/utils/noop-utils'

const data = [
  { label: '1', value: '1',},
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
];


export const RatingContext = createContext<RatingContextType>([
    {
      score: undefined,
      scoreCount: undefined,
      data: [{label: '', value: ''}],
      submitValue: undefined,
    },
    {
      handleGetValue: noop,
      handleSubmit: noop,
    }
  ]);

export const RatingContextProvider: FC<PropsWithChildren> = (props) => {
  const [score, setScore] = useState<string | undefined>(undefined);
  const [submitValue, setsubmitValue] = useState<string | undefined>(undefined);
  const scoreCount = data.length.toString();
  const handleGetValue = (e: string) => {
    setScore(e);
  };

  const handleSubmit = () => {
    setsubmitValue(score);
  }

  return <RatingContext.Provider
    value={[
      {
        score,
        scoreCount,
        data,
        submitValue,
      },
      {
        handleGetValue,
        handleSubmit,
      },
    ]}
    >
    {props.children}
  </RatingContext.Provider>
};

export const useRating = (): RatingContextType => {
  return useContext(RatingContext);
};