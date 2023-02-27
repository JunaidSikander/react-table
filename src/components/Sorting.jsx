import { useMemo } from 'react';
import { useTable, useSortBy } from "react-table"
import { COLUMNS } from '../components/columns';
import MOCK_DATA from "../data/MOCK_DATA.json"
import "./table.css"


export default function Sorting() {
    
    const columns = useMemo( () => COLUMNS, [] );
    const data = useMemo( () => MOCK_DATA, [] );
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable( {
        columns,
        data
    }, useSortBy )
    return <table { ...getTableProps() }>
        <thead>
        {
            headerGroups.map( ( headerGroup ) => (
                <tr { ...headerGroup.getHeaderGroupProps() }>
                    {
                        headerGroup.headers.map( ( column ) => (
                            <th { ...column.getHeaderProps( column.getSortByToggleProps() ) }>

                                    { column.render( 'Header' ) }
                                <span>
                                    { column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : '' }
                                </span>
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
}
