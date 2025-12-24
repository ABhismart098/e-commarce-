

import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const useAuth = () => {
  const Authdata = useContext(AuthContext);
  return Authdata
}

export default useAuth