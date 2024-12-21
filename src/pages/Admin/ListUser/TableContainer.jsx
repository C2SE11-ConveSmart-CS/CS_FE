import { useState } from 'react'
import { Form, Table } from 'react-bootstrap'

const TableContainer = ({ columns, rows, setSelectedRows }) => {
  const [selected, setSelected] = useState([])

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <Form.Check
              type="checkbox"
              id="default-checkbox-header"
              checked={selected.length === rows.length}
              onClick={() => {
                if (selected.length === rows.length) {
                  setSelected([])
                  setSelectedRows([])
                } else {
                  const newList = rows?.map((item, id) => id)
                  setSelected(newList)
                  setSelectedRows(newList)
                }
              }}
            />
          </th>
          {columns.map((col, id) => {
            return <th key={id}>{col.label}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, id) => {
          return (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>
                <Form.Check
                  type="checkbox"
                  id={'default-checkbox-' + id}
                  checked={selected.includes(id)}
                  onClick={() => {
                    if (selected.includes(id)) {
                      const newList = [...selected].filter(item => item !== id)
                      setSelected(newList)
                      setSelectedRows(newList)
                      return
                    }
                    const newList = [...selected, id]
                    setSelected(newList)
                    setSelectedRows(newList)
                  }}
                />
              </td>
              {columns.map((col, i) => {
                return <td key={i}>{row[col.field] ? row[col.field] : '-'}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableContainer
