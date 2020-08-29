import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import AuthContextProvider from './Contexts/AuthContext';
import LoginForm from './Components/LoginForm';
import MainScreen from './Components/MainScreen';

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
    <MainScreen/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
