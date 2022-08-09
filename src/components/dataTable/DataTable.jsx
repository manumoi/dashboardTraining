import './dataTable.scss'
import {userColumns, userRows} from './dataTableSource.js'
import { DataGrid } from '@mui/x-data-grid';
import { dialogClasses } from '@mui/material';

const DataTable = () => {


    const actionColumn=[
        {
            field:'action',
            headerName:'Action',
            width:200, 
            renderCell:()=>{
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }

        }
    ]

    return (
        <div className='dataTable'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable