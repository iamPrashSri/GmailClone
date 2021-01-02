import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Mail from "./components/Mail/Mail";
import EmailsList from "./components/EmailsList/EmailsList";
import SendMail from "./components/SendMail/SendMail";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './DataLayerConfig/Firebase';

function App() {

  let sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  let user = useSelector(selectUser);
  let dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if( user ){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }));
      } else {

      }
    });
  }, []);
  
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <SideBar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailsList />
              </Route>
            </Switch>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
