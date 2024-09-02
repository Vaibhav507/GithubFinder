import { Component, Fragment, useState } from "react";
import Navbar from './Navbar'
import Users from "./Users";
import User from "./User";
import Search from "./Search";
import Alert from "./Alert";
import About from "./About";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";

const App = () => {
  
  const [repos, setRepos] = useState([])
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({ msg, type})

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }


    return (
      <GithubState>
        <Router>
        <div className="App">
          <Navbar />
          <div className="container d-flex flex-column gap-2 mt-2">
            <Alert alert={alert}/>
            <Routes>
              <Route path="/" element={
                <>
                  <Search setAlert={showAlert}/>
                  <Users />
                </>
              }/>
              <Route path="/about" element={<About />}/>
            </Routes>
          </div>
        </div>
        </Router>
      </GithubState>
    )
  
  
}

export default App
