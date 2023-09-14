import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Login from './components/Login';

function App() {
  return (
    <div className="Appy">
     <div className='heading'>
       <div className="title"><span>Uploader</span></div>
       <div className="sign-in"><span>Sign In</span></div>
       <div className="login"><span>Login</span></div>
      
     </div>
     {/* <Home></Home> */}
     <Signin></Signin>
     {/* <Login></Login> */}
    </div>
  );
}

export default App;
