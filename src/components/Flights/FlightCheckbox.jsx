import React, { useState, useEffect } from "react";

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup } from 'reactstrap';

const FlightCheckbox = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);


  

  return (
    <>
    <p>Select Direct Option</p>
  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {props.label}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Choose From</DropdownItem>

        <DropdownItem  id="1" value="Direct" onClick={props.handleDirectFlights}>Direct</DropdownItem>
        <DropdownItem id="0" value="No Direct" onClick={props.handleDirectFlights} >No Direct</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    </>
  );
};

export default FlightCheckbox;