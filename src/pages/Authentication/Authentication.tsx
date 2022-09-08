import { Button } from '../../components/Button/Button';
import { signInWithGoogle } from '../../utils/firebase/firebase';
import { LoginFormContainer } from './Authentication.styles';

export function Authentication() {
  const signIn = async () => await signInWithGoogle();

  return (
    <>
      <p>
        Żeby korzystać ze wszystkich funkcji strony należy się najpierw
        zalogować.
      </p>
      <p>
        Po zalogowaniu możesz dodać informacje do swojego profilu, które będą
        wyświetlone jako wartości domyślne w Twoim CV.
      </p>

      <LoginFormContainer>
        <h2>Zaloguj się</h2>

        <Button onClick={signIn}>zaloguj się z google</Button>
      </LoginFormContainer>
    </>
  );
}
