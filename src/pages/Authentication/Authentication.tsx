import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { signInStart, selectUser } from '../../store/user';
import { LoginFormContainer } from './Authentication.styles';

function AuthenticationContent() {
  const dispatch = useDispatch();
  const signIn = () => dispatch(signInStart());

  return (
    <>
      <p>To use every function of this page you have to firstly sign in.</p>
      <p>
        After signing in you can add information to your profile which are going
        to be displayed as default values in your CV.
      </p>

      <LoginFormContainer>
        <h2>Sign in</h2>

        <Button onClick={signIn}>sign in with google</Button>
      </LoginFormContainer>
    </>
  );
}

export function Authentication() {
  const user = useSelector(selectUser);

  return <>{user ? <Navigate to='/' /> : <AuthenticationContent />}</>;
}
