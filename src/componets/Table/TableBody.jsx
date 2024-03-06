import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

const rows = [
    createData("Thailand", "₹60,065", "2 March 2022", "Available"),
    createData("Europe ", "₹60,065", "2 March 2022", "Available"),
    createData("Dubai", "₹60,065", "2 March 2022", "Pending"),
    createData("Paris", "₹60,065", "2 March 2022", "Unavailable"),
];

const makeStyleFunc = (status)=>{
    if (status === "Available"){
        return{
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    } else if (status === "Unavailable"){
        return{
            background: '#ffadad8f', 
            color: 'red',
        }
    }else{
        return{
            background: '#59bfff',
            color: 'white',
        }
    }
}
 function BasicTable() {
    return (
        <TableContainer component={Paper}
        
        style={{
            boxShadow: '0px 13px 20px 0px #80808029'
        }}
        >
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Holiday Package</TableCell>
                        <TableCell align="left">Prices</TableCell>
                        <TableCell align="left">Booking Date</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.trackingId}</TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">
                                <span className='status' style={makeStyleFunc(row.status)}>{row.status}</span>
                            </TableCell>
                            <TableCell align="left" className='Detail'>Detail </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable