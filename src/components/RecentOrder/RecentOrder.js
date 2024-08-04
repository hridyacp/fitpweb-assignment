import { Grid } from '@mui/material';
import './recentOrder.css';
import OrderTable from '../OrderTable/OrderTable';
import CustomerFeedback from '../../Api/CustomerFeedback';
import { CiStar } from 'react-icons/ci';
import { IconContext } from 'react-icons';
import { FaStar } from 'react-icons/fa';
const RecentOrder=()=>{
    return(
        <Grid container xs={11} md={12} spacing={3} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={12} md={8} className="grid-container">
            <div className='table-container'>
                <div style={{fontSize:"18px",fontWeight:600}}>Recent Orders</div>
<OrderTable />
</div>
            </Grid>
            <Grid item xs={12} md={4} className="grid-container">
                <div className='table-container'>
            <div className='feedback-container'>
                <div style={{fontSize:"18px",fontWeight:600}}>Customer's Feedback</div>
                {CustomerFeedback.map((item)=>{
                    return(
                        <div className="feedback-wrapper">
<div className='customer-name'>
                <img src={item?.img} alt="profile" width="50px" height="50px" style={{borderRadius:"50%"}}/>
                {item?.customer}
   </div>
   <div>
   {Array.from({ length: item?.stars }, (_, index) => (
        <IconContext.Provider value={{ color: "yellow", size: '15px', className: "global-class-name" }}>
    <FaStar />
                 </IconContext.Provider>
      ))}
       {Array.from({ length: 5-item?.stars }, (_, index) => (
        <IconContext.Provider value={{ color: "white", size: '15px', className: "global-class-name" }}>
    <FaStar />
                 </IconContext.Provider>
      ))}
  
    </div>
    <div className="review-end" style={{textAlign:"left"}}>
    {item?.review}
        </div>
        
   </div>
                    )
                })}
                
                </div>
                </div>
            </Grid>

        </Grid>
    )
}
export default RecentOrder;