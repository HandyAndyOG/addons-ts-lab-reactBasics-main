import React from 'react'
import { createContext } from 'react'
import { States } from './Types/types'

export const UserContext = createContext<States>({
    title: '',
    setTitle: () => {},
    first: '',
    setFirst: () => {},
    last: '',
    setLast: () => {},
  });
  
  const UserProvider: React.FC<{ children: React.ReactElement }> = ({children}) => {
    const [title, setTitle] = React.useState('')
    const [first, setFirst] = React.useState('')
    const [last, setLast] = React.useState('')

  return (
    <UserContext.Provider value = {{ title, setTitle, first, setFirst, last, setLast }}>
    {children}
  </UserContext.Provider>
  )
}

export default UserProvider
