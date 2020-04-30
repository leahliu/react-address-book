import React from 'react';

const AddressHeader = (props) => {
  
  return (
    <thead>
      <tr>
        {props.columns.map((item) => {
          return <td className="HeaderCell" isSortable={item.sortable} selector={item.selector}>{item.name}</td>
        })}
      </tr>
    </thead>
  )
}

export default AddressHeader;