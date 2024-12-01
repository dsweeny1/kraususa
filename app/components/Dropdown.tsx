import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Dropdown = () => {
    return (
        <Menu>
          <MenuButton>Kitchen</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-indigo-600 bg-opacity-100" href="/settings">
                Kitchen Sinks
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-indigo-600 bg-opacity-100" href="/support">
                Kitchen Faucets
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-indigo-600 bg-opacity-100" href="/license">
                All In One
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-indigo-600 bg-opacity-100" href="/license">
                Accessories
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-indigo-600 bg-opacity-100" href="/license">
                Sink Collections
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-indigo-600 bg-opacity-100" href="/license">
                Faucet Collections
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      )
}

export default Dropdown