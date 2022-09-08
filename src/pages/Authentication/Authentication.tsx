import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { setUser } from '../../state/user/user.reducer';
import { selectUser } from '../../state/user/user.selector';
import { signInWithGoogle } from '../../utils/firebase/auth';
import { LoginFormContainer } from './Authentication.styles';

function AuthenticationContent() {
  const dispatch = useDispatch();
  const signIn = async () => {
    const { user } = await signInWithGoogle();

    dispatch(setUser(user));
  };

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

export function Authentication() {
  const user = useSelector(selectUser);

  return <>{user ? <Navigate to='/' /> : <AuthenticationContent />}</>;
}
