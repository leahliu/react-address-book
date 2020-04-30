import React from "react";

const TableCell = (props) => {
  const address = props.address;
  return ( 
    <React.Fragment>
      {Object.keys(address).map((key) => {
        return <td className="CommonCell">{address[key]}</td>
      })
      }
    </React.Fragment>
  )
}

export default TableCell;
