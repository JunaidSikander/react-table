import { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters } from "react-table"
import ColumnFilter from '../components/ColumnFilter.jsx';
import GlobalFilter from '../components/GlobalFilter';
import { COLUMNS_WITH_FILTER } from '../components/columns';
import MOCK_DATA from "../data/MOCK_DATA.json"
import "./table.css"


export default function ColumnFilterTable() {
    
    const columns = useMemo( () => COLUMNS_WITH_FILTER, [] );
    const data = useMemo( () => MOCK_DATA, [] );
    const defaultColumn = useMemo( () => ( { Filter :ColumnFilter } ), [] )
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable( { columns, data, defaultColumn }, useFilters, useGlobalFilter )
    
    const { globalFilter } = state;
    
    return <div style = { { width :'100%' } }>
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
                                <div>{ column.canFilter ? column.render( 'Filter' ) : null }</div>
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
