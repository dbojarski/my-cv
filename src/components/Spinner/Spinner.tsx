import { SpinnerContainer, SpinnerElement } from './Spinner.styles';

type SpinnerProps = {
  position?: 'left' | 'center' | 'right';
};

export function Spinner(props: SpinnerProps = { position: 'center' }) {
  return (
    <SpinnerContainer className={`spinner-${props.position}`}>
      <SpinnerElement />
      <span>Loading data...</span>
    </SpinnerContainer>
  );
}
