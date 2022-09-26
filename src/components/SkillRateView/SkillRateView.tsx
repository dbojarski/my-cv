import {
  SkillRateViewBullet,
  SkillRateViewContainer,
} from './SkillRateView.styles';

type SkillRateViewProps = {
  rate: string;
};

export function SkillRateView(props: SkillRateViewProps) {
  const bullets = Array.from(Array(Number(props.rate)));

  return (
    <SkillRateViewContainer>
      {bullets.map((_, index) => (
        <SkillRateViewBullet data-testid='rateViewBullet' key={index} />
      ))}
    </SkillRateViewContainer>
  );
}
