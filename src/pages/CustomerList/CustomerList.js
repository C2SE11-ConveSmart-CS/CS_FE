import AddIcon from '../../icons/AddIcon'
import DeleteIcon from '../../icons/DeleteIcon'
import DownLoadIcon from '../../icons/Download'
import UploadIcon from '../../icons/UploadIcon'
import ViewListIcon from '../../icons/ViewListIcon'
import Dropdown from './Dropdown'
import Pagination from './Pagination'
import Search from './Search'
import TableCustomerList from './TableCustomerList'
import SideBar from './Sidebar'
import Header from './Header'

const CustomerList = () => {
  return (
    <div className="flex" style={{ minHeight: '100vh' }}>
      <SideBar />
     
      <div className="w-[100%]">
        <Header />
        <div
          className="p-7 bg-[#F4F5F9] flex flex-col gap-[20px]"
          style={{ minHeight: '100vh' }}
        >
          <div className="flex">
            <span className="font-bold text-[24px] flex-1">Khách hàng</span>
            <div className="flex justify-end gap-3">
              <Dropdown />
              <span className="border-2 bg-white flex justify-center items-center w-[36px] h-[36px] rounded-lg">
                <AddIcon />
              </span>
              <span className="border-2 bg-white flex justify-center items-center w-[36px] h-[36px] rounded-lg">
                <UploadIcon />
              </span>
            </div>
          </div>
          <div className="bg-white flex flex-col text-black p-5 rounded-lg">
          {/* <span className="h-12">Tab lits</span> */}
            <div className="py-3 flex items-center">
              <span className="flex-1 flex gap-7">
                <Search placeholder="Tìm kiếm tên khách hàng, số điện thoại,..."/>
                <div className='flex flex-row gap-3 items-center'>
                  <DeleteIcon />
                  Xoá
                </div>
              </span>
              <span className="flex justify-end gap-3 items-center pr-3">
                <DownLoadIcon />
                Tải về
                <ViewListIcon />
              </span>
            </div>
            <TableCustomerList />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default CustomerList
