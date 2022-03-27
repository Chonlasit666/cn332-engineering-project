import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TaskManage from './components/TaskManage';
import AppNav from './components/AppNav';
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard';


ReactDOM.render(
  <React.StrictMode>
    <AppNav />
    
    <BrowserRouter>
      <Routes>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Myprojecct" element={<TaskManage />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
