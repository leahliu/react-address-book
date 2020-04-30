import React from 'react';
import Cell from './cell';

const TableRow = (props) => {
  return (
    <tr>
      <Cell address={props.address}/>
      <td>
        <button type="checkbox" onClick={() => props.removeAddress(props.address.id)} name={`address-${props.address.id}`}>Delete</button>
      </td>
    </tr>
  )
}

export default TableRow;