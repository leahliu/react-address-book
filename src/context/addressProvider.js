import React, { createContext, useReducer } from "react";
import {reducer} from './reducer';

export const AddressContext = createContext();


const AddressProvider = ({children}) => {
  const [addresses, dispatch] = useReducer(reducer, [
    { id: 1, name: 'Khali Zhang', location: 'Shanghai', office: 'C-103', cellPhone: '650-353-1239', officePhone: '650-353-1239' },
    { id: 2, name: 'Leah Liu', location: 'Shanghai', office: 'C-103', cellPhone: '650-353-1239', officePhone: '650-353-1239' }
  ]);

  return (
    <AddressContext.Provider value={{addresses, dispatch}}>
      {children}
    </AddressContext.Provider>   
  )
}

export default AddressProvider;