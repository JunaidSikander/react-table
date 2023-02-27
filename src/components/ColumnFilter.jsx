export default function ColumnFilter( { column } ) {
    const {filterValue, setFilter} = column;
    return <div className = 'global-filter'>
        <span>
        Search:
        <input value = { filterValue || '' } onChange = { ( e ) => setFilter( e.target.value ) } />
    </span>
    </div>
    
}
