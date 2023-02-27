import { useMemo } from 'react';
import { useTable, usePagination } from "react-table"
import { COLUMNS } from '../components/columns';
import MOCK_DATA from "../data/MOCK_DATA.json"
import "./table.css"


export default function PaginationTable() {
    
    const columns = useMemo( () => COLUMNS, [] );
    const data = useMemo( () => MOCK_DATA, [] );
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        setPageSize,
        state :{ pageIndex, pageSize },
        canPreviousPage,
        prepareRow
    } = useTable( {
        columns,
        data,
        initialState :{ pageIndex :2 } // set as default page index 5
    }, usePagination )
    return (
        <>
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
            page.map( row => {
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
    <div className = 'text-center'>
        <span>
            Page <strong>{ pageIndex + 1 } of { pageOptions.length }</strong>
        </span>
        <span>
            | Go to Page : { ' ' } <input
            type = { 'number' } defaultValue = { pageIndex + 1 } onChange = { e => {
            const pageNumber = e.target.value ? Number( e.target.value ) - 1 : 0
            gotoPage( pageNumber )
        } } style = { { width :'50px' } } />
        </span>
        <select value = { pageSize } onChange = { ( e ) => setPageSize( Number( e.target.value ) ) }>
        {
            [ 10, 25, 50 ].map( pageSize => (
                <option key = { pageSize } value = { pageSize }>
                    Show { pageSize }
                </option>
            ) )
        }
        </select>
        <button onClick = { () => gotoPage( 0 ) } disabled = { !canPreviousPage }> { '<<' } </button>
        <button onClick = { () => previousPage() } disabled = { !canPreviousPage }>Previous</button>
        <button onClick = { () => nextPage() } disabled = { !canNextPage }>Next</button>
        <button onClick = { () => gotoPage( pageCount - 1 ) } disabled = { !canNextPage }> { '>>' } </button>

    </div>
        </>
    )
}
