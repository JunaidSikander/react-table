import { format } from "date-fns"
import ColumnFilter from '../components/ColumnFilter.jsx';


export const COLUMNS_WITH_FILTER = [
    {
        Header :"Id",
        Footer :"Id",
        accessor :"id",
        // Filter :ColumnFilter,
        disableFilters: true
    },
    {
        Header :"First Name",
        Footer :"First Name",
        accessor :"first_name",
        // Filter :ColumnFilter
        
        
    },
    {
        Header :"Last Name",
        Footer :"Last Name",
        accessor :"last_name",
        // Filter :ColumnFilter
    },
    {
        Header :"Email",
        Footer :"Email",
        accessor :"email",
        // Filter :ColumnFilter
        
    },
    {
        Header :"Date of Birth",
        Footer :"Date of Birth",
        accessor :"date_of_birth",
        // Filter :ColumnFilter,
        Cell :( { value } ) => format( new Date( value ), "dd/MM/yyyy" )
        
    },
    {
        Header :"Age",
        Footer :"Age",
        accessor :"age",
        // Filter :ColumnFilter
    },
    {
        Header :"Country",
        Footer :"Country",
        accessor :"county",
        // Filter :ColumnFilter
    },
    {
        Header :"Phone",
        Footer :"Phone",
        accessor :"phone",
        // Filter :ColumnFilter
    }
]

export const COLUMNS = [
    {
        Header :"Id",
        Footer :"Id",
        accessor :"id"
    },
    {
        Header :"First Name",
        Footer :"First Name",
        accessor :"first_name"
        
    },
    {
        Header :"Last Name",
        Footer :"Last Name",
        accessor :"last_name"
    },
    {
        Header :"Email",
        Footer :"Email",
        accessor :"email"
        
    },
    {
        Header :"Date of Birth",
        Footer :"Date of Birth",
        accessor :"date_of_birth",
        Cell :( { value } ) => format( new Date( value ), "dd/MM/yyyy" )
        
    },
    {
        Header :"Age",
        Footer :"Age",
        accessor :"age"
    },
    {
        Header :"Country",
        Footer :"Country",
        accessor :"county"
    },
    {
        Header :"Phone",
        Footer :"Phone",
        accessor :"phone"
    }
]

export const GROUPED_COLUMNS = [
    {
        Header :'Id',
        Footer :'Id',
        accessor :'id'
    },
    {
        Header :'Name',
        Footer :'Name',
        columns :[
            {
                Header :'First Name',
                Footer :'First Name',
                accessor :'first_name'
            },
            {
                Header :'Last Name',
                Footer :'Last Name',
                accessor :'last_name'
            }
        ]
    },
    {
        Header :'Info',
        Footer :'Info',
        columns :[
            {
                Header :'Date of Birth',
                Footer :'Date of Birth',
                accessor :'date_of_birth'
            },
            {
                Header :'Country',
                Footer :'Country',
                accessor :'country'
            },
            {
                Header :'Phone',
                Footer :'Phone',
                accessor :'phone'
            }
        ]
    }
]
