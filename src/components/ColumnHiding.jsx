import { useMemo } from 'react';
import { useTable } from "react-table"
import { Checkbox } from '..//components/Checkbox';
import { COLUMNS } from '../components/columns';
import MOCK_DATA from "../data/MOCK_DATA.json"
import "./table.css"


export default function ColumnHiding() {
    
    const columns = useMemo( () => COLUMNS, [] );
    const data = useMemo( () => MOCK_DATA, [] );
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable( { columns, data } )
    return <>
        <div>
            <div>
                <Checkbox { ...getToggleHideAllColumnsProps() } /> Toggle All
            </div>
            {
                allColumns.map( ( column ) => (
                    <div key = { column.id }>
                        <label>
                            <input type = 'checkbox' { ...column.getToggleHiddenProps() } />
                            { column.Header }
                        </label>
                    </div>
                ) )
            }
        </div>
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
