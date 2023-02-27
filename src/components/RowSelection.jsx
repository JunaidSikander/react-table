import { useMemo } from 'react';
import { useTable, useRowSelect } from "react-table"
import { Checkbox } from '../components/Checkbox';
import { COLUMNS } from '../components/columns';
import MOCK_DATA from "../data/MOCK_DATA.json"
import "./table.css"


export default function RowSelection() {
    const columns = useMemo( () => COLUMNS, [] );
    const data = useMemo( () => MOCK_DATA, [] );
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows } = useTable( {
            columns,
            data
        }, useRowSelect,
        hooks => {
            hooks.visibleColumns.push( columns => [
                {
                    id :'selection',
                    Header :( { getToggleAllRowsSelectedProps } ) => (
                        <Checkbox { ...getToggleAllRowsSelectedProps() } />
                    ),
                    Cell :( { row } ) => <Checkbox { ...row.getToggleRowSelectedProps() } />
                },
                ...columns
            ] )
        } )
    
    const firstPageRows = rows.slice( 0, 10 )
    
    return <>
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
            firstPageRows.map( row => {
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
        <pre>
            {
                JSON.stringify( {
                        selectedFlatRows :selectedFlatRows.map( ( row ) => row.original )
                    },
                    null,
                    2 )
            }
        </pre>
    </>
}
