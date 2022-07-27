import React from 'react'
import { Navbar as NavbarBs, Nav, Container, NavDropdown, Dropdown, Button, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr"


type Props = {}

const Navbar = (props: Props) => {
    return (
        <NavbarBs expand="lg" className="">
            <NavbarBs.Brand href="#home" className='me-auto'>Dashboard</NavbarBs.Brand>
            <Nav className="">
                <DropdownButton
                    align="end"
                    title={<GrLanguage />}
                    id="dropdown-menu-align-end"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>


            </Nav>

        </NavbarBs>
    )
}

export default Navbar