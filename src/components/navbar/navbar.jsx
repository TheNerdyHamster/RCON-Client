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

import { remote } from 'electron';
const BrowserWindow = remote.BrowserWindow;
export default class NavbarComponent extends Component {
  onClickAddConnection() {
    var win = new BrowserWindow({ width: 800, height: 600 });

    win.webContents.on('did-finish-load', () => {
      win.show();
      win.focus();
    });
    win.loadURL(
      'file://' + __dirname + '/../../views/connection/add/index.html'
    );
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
