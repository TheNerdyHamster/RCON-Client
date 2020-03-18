import React, { Component } from 'react';
import {
  button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  Popover,
  Menu,
  MenuItem,
  Button,
  Divider
} from '@blueprintjs/core';

import { ipcRenderer } from 'electron';
export default class NavbarComponent extends Component {
  onClickAddConnection() {
    ipcRenderer.send('connection-add', null);
  }
  render() {
    return (
      <Navbar>
        <NavbarGroup>
          <Popover
            content={
              <Menu>
                <MenuItem
                  text="Add new connection"
                  icon="add"
                  onClick={this.onClickAddConnection}
                />
                <Divider />
                <MenuItem
                  text="Connection list"
                  icon="list"
                  onClick={this.onClickAddConnection}
                />
              </Menu>
            }
          >
            <Button className={Classes.MINIMAL} icon="menu"></Button>
          </Popover>
        </NavbarGroup>
      </Navbar>
    );
  }
}
