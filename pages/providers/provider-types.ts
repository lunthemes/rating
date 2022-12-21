
export type RatingContextState = {
  score: string | undefined;
  scoreCount: string | undefined;
  data: {label: string, value: string}[],
  submitValue: string | undefined,
};

export type RatingContextActions = {
  handleGetValue: ( e: string ) => void;
  handleSubmit:  () => void;
};

export type RatingContextType = [RatingContextState, RatingContextActions];
