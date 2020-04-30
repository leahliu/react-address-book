import React, { useState, useContext } from "react";

import {AddressContext} from '../context/addressProvider';
import './addAddress.scss';


const AddAddress = () => {
  const {dispatch} = useContext(AddressContext);
  const blankAddress = {name: '', location: '', office: '', cellPhone: '', officePhone: ''};
  const [addresses, setAddress] = useState();
  const [addressState,setAddressState] = useState([
    {...blankAddress}
  ]);
  const [buttonState, setButtonState] = useState(
    {isClicked: false}
  );

  const handleAddressData = e => {
    setAddress({
      ...addresses,
      [e.target.id]: e.target.value
    });
  };

  const handleAddressClicked = e => {
    e.preventDefault();
    setAddressState([{...blankAddress}]);
    setButtonState({isClicked: true});
  }

  const addNewAddress = e => {
    e.preventDefault();
    dispatch({type: "ADD_ADDRESS", addresses});
  }

  return (
    <React.Fragment>
      {buttonState.isClicked && addressState.map((address) => {
        return(
          <form onSubmit={addNewAddress} className="addAddress" key={address.id}>
            <table>
              <tbody>
              <tr>
                <td>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={handleAddressData}
            />
            </td>
            <td>
            <input
              type="text"
              id="location"
              placeholder="Location"
              onChange={handleAddressData}
            /></td>
            <td>
            <input
              type="text"
              id="office"
              placeholder="Office"
              onChange={handleAddressData}
            />
            </td>
            <td>
            <input
              type="text"
              id="cellPhone"
              placeholder="CellPhone"
              onChange={handleAddressData}
            />
            </td>
            <td>
            <input
              type="text"
              id="officePhone"
              placeholder="OfficePhone"
              onChange={handleAddressData}
            />
            </td>
            <td>
            <button>Save</button>
            </td>
            </tr>
            </tbody>
            </table>
        </form>
      )})
      }     
       <input
        type="button"
        className="addNewAddrBtn"
        value="Add New Address"
        onClick={handleAddressClicked} /> 
   </React.Fragment>
  )
}

export default AddAddress;

