import React from "react";

const TableCell = (props) => {
  const address = props.address;
  return ( 
    <React.Fragment>
      <td className="CommonCell">{address.id}</td>
      <td className="CommonCell">{address.name}</td>
      <td className="CommonCell">{address.location}</td>
      <td className="CommonCell">{address.office}</td>
      <td className="CommonCell" >
        {address.cellPhone}
      </td>
      <td className="CommonCell">{address.officePhone}</td>
      {/* {Object.keys(address).map((key) => {
        return <td className="CommonCell">{address[key]}</td>
      })
      } */}
    </React.Fragment>
  )
}

export default TableCell;
