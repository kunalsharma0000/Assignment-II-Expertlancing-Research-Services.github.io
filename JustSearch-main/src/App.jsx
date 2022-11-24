import React from 'react'
import Signup from "./components/Signup"
import Login from "./components/Login"
import AuthProvider from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from './components/Dashboard'
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import Home from './Home'
import Results from './components/Results'
import { Context } from "./contexts/Context"
function App() {
  return (
    <Router>
    <AuthProvider>
    <Context>
      <Switch>
        <Route exact path="/" component={Home} />
      
        
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/images" component={Results}></Route>
         <Route path="/news" component={Results}></Route>
         <Route path="/videos" component={Results}></Route>
      </Switch>
    </Context>
    </AuthProvider>
  </Router>
  )
}

export default App;
