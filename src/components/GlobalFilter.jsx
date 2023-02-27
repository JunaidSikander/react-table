export default function GlobalFilter( { filter, setFilter } ) {
    return <div className="global-filter">
        <span>
        Search:
        <input value = { filter || '' } onChange = { ( e ) => setFilter( e.target.value ) } />
    </span>
    </div>
    
}
