import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'


export default function GlobalFilter( { filter, setFilter } ) {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
    
    return <div className = 'global-filter'>
        <span>
        Search:
        <input
            value={value || ''}
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
        />
    </span>
    </div>
    
}
