import { FC } from 'react';

type NoopFunc = () => void;
type NoopPromiseFunc = <Type = void>() => Promise<Type>;
type NoopComponentType = FC<React.PropsWithChildren<any>>;

const noop: NoopFunc = () => {
  // No operation performed.
};
const noopPromise: NoopPromiseFunc = function <Type = void>() {
  return Promise.resolve() as unknown as Promise<Type>;
};

const NoopComponent: NoopComponentType = (props) => <>{props.children}</>;

export { noop, noopPromise, NoopComponent };
export type { NoopFunc, NoopPromiseFunc, NoopComponentType };