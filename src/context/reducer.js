export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return [
        ...state,
        {
          id: state.length + 1, 
          name: action.addresses.name,
          location: action.addresses.location,
          office: action.addresses.office,
          cellPhone: action.addresses.cellPhone,
          officePhone: action.addresses.officePhone
        }
      ];
    case "ADDRESS_CLICKED":
      return [
        ...state,
        {
          isClicked: state.isNewAddress
        }
      ];
    case "REMOVE_ADDRESS":
      return state.filter((address) => address.id !== action.id);
    default:
      return state;
  }
};
