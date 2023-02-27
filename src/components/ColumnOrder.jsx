import { useMemo } from 'react';
import { useTable, useColumnOrder } from "react-table"
import { COLUMNS } from '../components/columns';
import MOCK_DATA from "../data/MOCK_DATA.json"
import "./table.css"


export default function ColumnOrder() {
    
    const columns = useMemo( () => COLUMNS, [] );
    const data = useMemo( () => MOCK_DATA, [] );
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setColumnOrder } = useTable( {
        columns,
        data
    }, useColumnOrder )
    
    const changeOrder = () => {
        setColumnOrder( [ 'id', 'first_name', 'last_name', 'age', 'date_of_birth' ] )
    }
    
    return <>
        <button onClick = { changeOrder }> Change Column Order </button>
        <table { ...getTableProps() }>
        <thead>
        {
            headerGroups.map( ( headerGroup ) => (
                <tr { ...headerGroup.getHeaderGroupProps() }>
                    {
                        headerGroup.headers.map( ( column ) => (
                            <th { ...column.getHeaderProps }>
                                    { column.render( 'Header' ) }
                                </th>
                        ) )
                    }
                </tr>
            ) )
        }
        </thead>
        <tbody { ...getTableBodyProps() }>
        {
            rows.map( row => {
                prepareRow( row );
                return <tr { ...row.getRowProps() }>
                    { row.cells.map( cell => (
                        <td { ...cell.getCellProps() }>
                            { cell.render( 'Cell' ) }
                        </td>
                    ) ) }
                </tr>
            } )
        }
        </tbody>
    </table>
    </>
}
