import React from "react"
import { useTable, useSortBy } from "react-table"
import { Container, Table } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const centeredDiv = value => (<div style={{ textAlign: "center" }}>{value}</div>);

const generateSortingIndicator = column => {
  return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
}

const TableContainer = ({ citiesData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: row => centeredDiv(row.value)
      },
      {
        Header: 'Temperature (Cº)',
        accessor: 'main.temp',
        Cell: row => centeredDiv(row.value)
      },
      {
        Header: 'Sunrise',
        accessor: 'sys.sunrise',
        Cell: row => {
          const milliseconds = row.value * 1000;
          const dateObject = new Date(milliseconds);

          return centeredDiv(dateObject.toLocaleString())
        }
      },
      {
        Header: 'Sunset',
        accessor: 'sys.sunset',
        Cell: row => {
          const milliseconds = row.value * 1000;
          const dateObject = new Date(milliseconds);

          return centeredDiv(dateObject.toLocaleString())
        }
      },
    ],[]
  );

  const data = citiesData
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

  return (
    <Container style={{ marginTop: 100 }}>
      <Table bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {generateSortingIndicator(column)}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default TableContainer