import React from 'react'
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap'

export const roleData = [
  { label: 'All', value: 'all' },
  { label: 'Admin', value: 'admin' },
  { label: 'Staff', value: 'staff' },
]

const SearchContainer = ({ searchData, setSearchData }) => {
  return (
    <div className="user-management-search">
      <div>
        Search user
        <Form.Control
          placeholder="Nhập tài khoản"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={searchData.nameOrAccount}
          onChange={e =>
            setSearchData({ ...searchData, nameOrAccount: e.target.value })
          }
        />
      </div>
      {/* <div /> */}
      <div>
        Role
        <DropdownButton
          id="dropdown-basic-button"
          title={roleData.find(item => item.value === searchData.role).label}
        >
          {roleData.map(item => {
            return (
              <Dropdown.Item
                onClick={() =>
                  setSearchData({ ...searchData, role: item.value })
                }
              >
                {item.label}
              </Dropdown.Item>
            )
          })}
        </DropdownButton>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'end',
          flexDirection: 'column',
        }}
      >
        <div style={{ opacity: 0 }}>Hide</div>
        <Button
          variant="primary"
          style={{ height: 'max-content', width: 'max-content' }}
          type="submit"
        >
          Tìm kiếm
        </Button>
      </div>
    </div>
  )
}

export default SearchContainer
