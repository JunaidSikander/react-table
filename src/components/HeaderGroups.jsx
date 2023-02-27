import { useMemo } from 'react';
import { useTable } from "react-table"
import { GROUPED_COLUMNS } from '../components/columns';
import MOCK_DATA from "../data/MOCK_DATA.json"
import "./table.css"


export default function HeaderGroups() {
    
    const columns = useMemo( () => GROUPED_COLUMNS, [] );
    const data = useMemo( () => MOCK_DATA, [] );
    
    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable( {
        columns,
        data
    } )
    return <table { ...getTableProps() }>
        <thead>
        {
            headerGroups.map( ( headerGroup ) => (
                <tr { ...headerGroup.getHeaderGroupProps() }>
                    {
                        headerGroup.headers.map( ( column ) => (
                            <th { ...column.getHeaderProps() }>
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
        <tfoot>
        { footerGroups.map( footerGroup => (
            <tr { ...footerGroup.getFooterGroupProps() }>
                { footerGroup.headers.map( column => (
                    <td { ...column.getFooterProps }>
                        { column.render( 'Footer' ) }
                    </td>
                ) ) }
            </tr>
        ) ) }
        </tfoot>
    </table>
}
