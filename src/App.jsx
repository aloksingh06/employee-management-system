import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmpolyeeDashboard from "./components/dashboard/EmpolyeeDashboard";
import Admindashboard from "./components/dashboard/Admindashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import AuthContext, { authContext } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState("");
  const data = useContext(authContext);
 useEffect(() => {
  if(data){
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      // setUser(loggedInUser.role);
      console.log(loggedInUser.role)
    }
  }
 else{}
  
 }, [data])
 

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      // setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
    } else if (data && data.employees.find((e)=>email== e.email && e.password== password)) {
      setUser("user");
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}));

    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    setLocalStorage();
  }, []);

  
 
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <Admindashboard /> : <EmpolyeeDashboard />}
    </>
  );
}

export default App;
