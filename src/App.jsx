import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmpolyeeDashboard from "./components/dashboard/EmpolyeeDashboard";
import Admindashboard from "./components/dashboard/Admindashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import AuthContext, { authContext } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState("");
  const [loggedUserData, setLoggedUserData] = useState("")
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
  
 }, [])
 

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
    } else if (data && data.employees.find((e)=>email== e.email && e.password== password)) {
      const employee = data.employees.find((e)=>email== e.email && e.password== password)
      if(employee){

        setUser("employee");
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}));
        setLoggedUserData(employee)
      }

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
      {user == "admin" ? <Admindashboard /> : <EmpolyeeDashboard data={loggedUserData} />}
    </>
  );
}

export default App;
