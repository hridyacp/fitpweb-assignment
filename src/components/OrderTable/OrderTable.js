
import './orderTable.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RecentOrders from '../../Api/RecentOrders';
import { styled } from '@mui/material';

const OrderTable=()=>{
  const StyledTableCell = styled(TableCell)(( ) => ({
    [`&.${tableCellClasses.head}`]: {
      color: 'white',
      fontSize: 14,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: 'white',
    },
  }));
  
    return(
        <TableContainer component={Paper} sx={{background:"none",overflowY:"hidden", }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer</StyledTableCell>
              <StyledTableCell >Order No.</StyledTableCell>
              <StyledTableCell >Amount</StyledTableCell>
              <StyledTableCell >Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {RecentOrders.map((row) => (
              <TableRow
                key={row.customer}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row" sx={{display:"flex",alignItems:"center",gap:"2em"}}>
                 <img src={row.img} alt="profile" width="40px" height="40px" style={{borderRadius:"50%"}}/>
                 {row.customer}
                </StyledTableCell>
                <StyledTableCell >{row.orderNo}</StyledTableCell>
                <StyledTableCell >{row.amount}</StyledTableCell>
                <StyledTableCell ><div className="status-button" style={{backgroundColor:row?.status==="Delivered"?"rgba(20,82,71,255)":"rgba(94,52,56,255)",color:row?.status==="Delivered"?"rgba(2,199,140,255)":"rgba(242,94,95,255)"}}>
                  {row.status}</div></StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
export default OrderTable;