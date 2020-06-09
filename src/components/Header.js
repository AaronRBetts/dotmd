import React, { Component } from 'react'
import { Navbar, NavbarText } from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar id="header" className="justify-content-center align-items-end">
        <NavbarText className="display-3">dotmd</NavbarText>
        <NavbarText><em>Markdown previewer</em></NavbarText>
      </Navbar>
    )
  }
}
