import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

export const testStore = configureStore()({
  user: { data: {} },
});

export function RenderWithProvider({
  children,
}: PropsWithChildren): JSX.Element {
  return <Provider store={testStore}>{children}</Provider>;
}
