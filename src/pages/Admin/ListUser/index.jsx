import { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownButton, Modal } from 'react-bootstrap'
import Layout from '../../../components/Layout/Layout'
import {
  blockUser,
  editRole,
  getListUser,
  unblockUser,
} from '../../../services/api/accountmanagement'
import './index.css'
import SearchContainer, { roleData } from './SearchContainer'
import TableContainer from './TableContainer'
import { toast } from 'react-toastify'

const listUserColumns = [
  {
    label: 'User Name',
    field: 'normalize',
  },
  {
    label: 'Email',
    field: 'email',
  },
  {
    label: 'Role',
    field: 'role',
  },
  {
    label: 'Created At',
    field: 'createdAt',
  },
  {
    label: 'Status Account',
    field: 'status_account',
  },
]

const initSearchData = {
  nameOrAccount: '',
  role: roleData[0].value,
}

const ManagementUserAccount = () => {
  const [searchData, setSearchData] = useState(initSearchData)
  const [data, setData] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const [showBlockModal, setShowBlockModal] = useState(false)
  const [showUnBlockModal, setUnShowBlockModal] = useState(false)
  const [showEditRolekModal, setShowEditRoleModal] = useState(false)
  const [currentRoleText, setCurrentRoleText] = useState('Admin')
  const getData = async () => {
    const data = await getListUser(searchData)
    if (!data.users) return
    const formatDate = data?.users?.map(item => {
      return {
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString('vi-VN', {
          timeZone: 'Asia/Ho_Chi_Minh',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      }
    })
    setData(formatDate)
    setSelectedRows([])
  }
  const handleSubmit = async e => {
    e.preventDefault()
    await getData(searchData)
  }
  const handleBlock = async () => {
    const listIdBlock = []
    data.forEach((user, id) => {
      if (selectedRows.includes(id)) {
        listIdBlock.push(user._id)
      }
    })
    const resp = await blockUser(listIdBlock)
    if (resp) {
      toast.success('Block success')
      await getData()
    } else {
      toast.error('Block failed')
    }
    setShowBlockModal(false)
  }
  const handleUnBlock = async () => {
    const listIdBlock = []
    data.forEach((user, id) => {
      if (selectedRows.includes(id)) {
        listIdBlock.push(user._id)
      }
    })
    const resp = await unblockUser(listIdBlock)
    if (resp) {
      toast.success('Un-Block success')
      await getData()
    } else {
      toast.error('Un-Block failed')
    }
    setUnShowBlockModal(false)
  }
  const handleEdit = async () => {
    const listIdEdit = []
    data.forEach((user, id) => {
      if (selectedRows.includes(id)) {
        listIdEdit.push(user._id)
      }
    })
    const resp = await editRole(
      listIdEdit,
      currentRoleText?.toLocaleLowerCase()
    )
    if (resp) {
      toast.success('Edit role success')
      await getData()
    } else {
      toast.error('Edit role failed')
    }
    setShowEditRoleModal(false)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <form className="user-management-container" onSubmit={handleSubmit}>
        <div className="user-management-header">Account management</div>
        <SearchContainer
          searchData={searchData}
          setSearchData={setSearchData}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <DropdownButton
            id="dropdown-basic-button"
            title="Action"
            disabled={selectedRows.length === 0}
          >
            <Dropdown.Item
              onClick={() => {
                setShowBlockModal(true)
              }}
            >
              Block
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setUnShowBlockModal(true)
              }}
            >
              Unblock
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setShowEditRoleModal(true)
              }}
            >
              Edit Role
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <TableContainer
          columns={listUserColumns}
          rows={data}
          setSelectedRows={arrSelectedRowId =>
            setSelectedRows(arrSelectedRowId)
          }
        />
        {/* block */}
        <div
          className="modal show"
          style={{
            display: showBlockModal ? 'flex' : 'none',
            alignItems: 'center',
            position: 'absolute',
          }}
        >
          <Modal.Dialog
            style={{
              width: '500px',
            }}
          >
            <Modal.Header closeButton onHide={() => setShowBlockModal(false)}>
              <Modal.Title>Block account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>bạn chắc chứ?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowBlockModal(false)}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={handleBlock}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        {/* un-block */}
        <div
          className="modal show"
          style={{
            display: showUnBlockModal ? 'flex' : 'none',
            alignItems: 'center',
            position: 'absolute',
          }}
        >
          <Modal.Dialog
            style={{
              width: '500px',
            }}
          >
            <Modal.Header closeButton onHide={() => setUnShowBlockModal(false)}>
              <Modal.Title>Un-Block account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>bạn chắc chứ?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setUnShowBlockModal(false)}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={handleUnBlock}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        {/* edit-role */}
        <div
          className="modal show"
          style={{
            display: showEditRolekModal ? 'flex' : 'none',
            alignItems: 'center',
            position: 'absolute',
          }}
        >
          <Modal.Dialog
            style={{
              width: '500px',
            }}
          >
            <Modal.Header
              closeButton
              onHide={() => setShowEditRoleModal(false)}
            >
              <Modal.Title>Edit account</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              Select role
              <DropdownButton
                id="dropdown-basic-button "
                className="text-capitalize"
                title={currentRoleText}
                disabled={selectedRows.length === 0}
              >
                <Dropdown.Item onClick={() => setCurrentRoleText('Admin')}>
                  Admin
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCurrentRoleText('Staff')}>
                  Staff
                </Dropdown.Item>
              </DropdownButton>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowEditRoleModal(false)}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={handleEdit}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </form>
    </Layout>
  )
}

export default ManagementUserAccount
