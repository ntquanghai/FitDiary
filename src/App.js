import logo from './logo.svg';
import './App.css';
import { LogInPage } from './containers/logInPage';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from './containers/signUpPage';
import { HomePage } from './layouts/homePageLayout';

function App() {
  return (
    <div className = "h-screen flex flex-col">
      <Routes>
        <Route path = "/login" element = {<LogInPage/>}></Route>
        <Route path = "/signup" element = {<SignUpPage/>}></Route>
        <Route path = "/" element = {<HomePage/>}>
          <Route path = "/nutritional-value"></Route>
          <Route path = "/calories-tracker"></Route>
          <Route path = "/calories-calculator"></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
