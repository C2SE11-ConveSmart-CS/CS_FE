import React from 'react'

const customers = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
  {
    id: 2,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
  {
    id: 3,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
  {
    id: 4,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
  {
    id: 5,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
  {
    id: 6,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
  {
    id: 7,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
  {
    id: 8,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
  {
    id: 9,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
  {
    id: 10,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'example@example.com',
    createdBy: 'Admin',
    status: 'Active',
    lastCareDate: '2024-10-10',
  },
]

const ArrowIcon = () => (
  <a href="#">
    <svg
      class="w-3 h-3 ms-1.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
    </svg>
  </a>
)

const TableCustomerList = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className='px-6 py-4'></th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                ID <ArrowIcon />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Tên Khách Hàng
                <ArrowIcon />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Số Điện Thoại <ArrowIcon />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Email <ArrowIcon />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Tạo Bởi <ArrowIcon />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Trạng Thái <ArrowIcon />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Ngày Chăm Sóc Cuối <ArrowIcon />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map(customer => (
              <tr key={customer.id} className="border-b dark:border-gray-700">
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-5 h-5"/>
                </td>
                <td className="px-6 py-4">{customer.id}</td>
                <td className="px-6 py-4">{customer.name}</td>
                <td className="px-6 py-4">{customer.phone}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">{customer.createdBy}</td>
                <td className="px-6 py-4">{customer.status}</td>
                <td className="px-6 py-4">{customer.lastCareDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="px-6 py-4 text-center">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableCustomerList
