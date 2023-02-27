import { useMemo } from 'react';
import { useTable, useGlobalFilter } from "react-table"
import GlobalFilter from '../components/GlobalFilter';
import { COLUMNS } from '../components/columns';
import MOCK_DATA from "../data/MOCK_DATA.json"
import "./table.css"


export default function FilteringTable() {
    
    const columns = useMemo( () => COLUMNS, [] );
    const data = useMemo( () => MOCK_DATA, [] );
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable( { columns, data }, useGlobalFilter )
    
    const { globalFilter } = state;
    
    return <div style={{ width: '100%' }}>
        <GlobalFilter filter = { globalFilter } setFilter = { setGlobalFilter } />
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
    </div>
}
