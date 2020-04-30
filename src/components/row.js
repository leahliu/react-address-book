import React from 'react';
import Cell from './cell';

const TableRow = (props) => {
  return (
    <tr>
      <Cell address={props.address}/>
      <td>
        <button onClick={() => props.removeAddress(props.address.id)} name={`remove-address-${props.address.id}`}>Delete</button>
        <button onClick={() => props.editAddress(props.address.id)} name={`edit-address-${props.address.id}`}>Edit</button>
      </td>
    </tr>
  )
}

export default TableRow;