import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'
export const authContext = createContext()
function AuthContext({children}) {

const [userData, setUserData] = useState(null)

useEffect(() => {
  
  const {employees,admin} = getLocalStorage()
  setUserData({employees,admin})
  
}, [])


  return (
    <div>

      <authContext.Provider value={userData}>
        {children}
      </authContext.Provider>
    </div>
  )
}

export default AuthContext