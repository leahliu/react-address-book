import React, {useContext} from 'react';
import {AddressContext} from '../context/addressProvider';
import Row from './row';
import Header from './header';

import './table.scss';

const columns = [
  {
    name: 'ID',
    selector: 'Id',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'Name',
    sortable: true,
  },
  {
    name: 'Location',
    selector: 'Location',
    sortable: true
  },
  {
    name: 'Office',
    selector: 'Office',
    sortable: true
  },
  {
    name: 'CellPhone',
    selector: 'CellPhone',
    sortable: true
  },
  {
    name: 'OfficePhone',
    selector: 'OfficePhone',
    sortable: true
  }
];

const AddressTable = () => {
  const {addresses, dispatch} = useContext(AddressContext);

  const removeAddress = index => {
    dispatch({type: "REMOVE_ADDRESS", id: index});
  }

  const editAddress = index => {
    
  }

  return (
    <table cellPadding="0" cellSpacing="0">
      <Header columns={columns}/>
      <tbody>
        {addresses.map(address => (
          <Row address={address} key={address.id} removeAddress={removeAddress} editAddress={editAddress}/>
        ))}        
      </tbody>
    </table>    
  );
}

export default AddressTable;