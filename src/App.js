import logo from './logo.svg';
import './App.css';
import { LogInPage } from './containers/logInPage';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from './containers/signUpPage';
import { HomePage } from './containers/fitnessCalendar/caloriesTracker';
import { FitnessTracker } from './containers/fitnessCalendar/fitnessTracker';
import { CalculatorPage } from './containers/nutritions/calculatorPage';

function App() {
  return (
    <div className = "h-screen flex flex-col">
      <Routes>
        <Route path = "/login" element = {<LogInPage/>}></Route>
        <Route path = "/signup" element = {<SignUpPage/>}></Route>
        <Route path = "/">
          <Route path = "/fitness-tracker" element = {<FitnessTracker/>}></Route>
          <Route path = "/calories-tracker" element = {<HomePage/>}></Route>
          <Route path = "/calories-calculator" element = {<CalculatorPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
