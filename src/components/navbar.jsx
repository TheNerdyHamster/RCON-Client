import React from 'react';
import {
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  Popover,
  Menu,
  MenuItem,
  Divider
} from '@blueprintjs/core';

import { remote } from 'electron';

const showMessageBox = remote.dialog.showMessageBox;
const app = remote.app;

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar>
        <NavbarGroup>
          <Popover
            content={
              <Menu>
                <MenuItem
                  text="Add new connections"
                  onClick={() =>
                    showMessageBox({
                      type: 'info',
                      message: 'Activated',
                      button: ['close']
                    })
                  }
                />
                <Divider></Divider>
                <MenuItem
                  text="Connection list"
                  onClick={() =>
                    showMessageBox({
                      type: 'info',
                      message: 'Activated',
                      button: ['close']
                    })
                  }
                />
              </Menu>
            }
          >
            <Button className={Classes.MINIMAL} icon="plus"></Button>
          </Popover>
        </NavbarGroup>
      </Navbar>
    );
  }
}
