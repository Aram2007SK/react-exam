import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import LogIn from './screens/LogIn/LogIn';
import { useEffect } from 'react';
import { authLogin } from './redux/actions/logInActions';
import MainPage from './screens/MainPage/MainPage';
import { currentUserSelector } from './redux/selectors/authSelector';

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector);
  localStorage.setItem('membersList',JSON.stringify([{login:'Admin',password:'123456789'}])) 
  // localStorage.clear()
  useEffect(() => {
    dispatch(authLogin())
  }, [])
  return (
    <div className="App">
      {currentUser ? <MainPage /> : <LogIn />}
    </div>
  );
}

export default App;
