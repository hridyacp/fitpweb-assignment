import './profit.css';
import { BsCartCheckFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Box, CircularProgress, Grid, styled, Typography } from "@mui/material";
const Profit=()=>{
      const firstDeg = ((30 / 100) * 360)-306;
    const orderDetail=[
        {   icon: <BsCartCheckFill />,
            iconColor:"rgba(94,129,227,255)",
            backgroundColor:"rgba(41,50,100,255)",
            name:"Total Orders",
            number: 75,
            percent:3,
            isProfit:true
        },
        {   icon: <BsCartCheckFill />,
            iconColor:"rgba(2,199,140,255)",
            backgroundColor:"rgba(20,82,71,255)",
            name:"Total Delivered",
            number: 70,
            percent:3,
            isProfit:false
        },
        {   icon: <BsCartCheckFill />,
            iconColor:"rgba(242,94,95,255)",
            backgroundColor:"rgba(94,52,56,255)",
            name:"Total Cancelled",
            number: "05",
            percent:3,
            isProfit:true
        },
        {   icon: <BsCartCheckFill />,
            iconColor:"rgba(225,69,154,255)",
            backgroundColor:"rgba(136,50,98,255)",
            name:"Total Revenue",
            number: "$12K",
            percent:3,
            isProfit:false
        }
]
    return(
        <Grid container xs={11} md={12} spacing={3} >
{orderDetail?.map((item,index)=>{
    return(
<Grid item xs={6} md={2} className="grid-container">
       <div className="card-container" key={index}>
        <div className="icon-wrapper" style={{background:item?.backgroundColor}}>
       <IconContext.Provider value={{ color: item?.iconColor, size: '30px', className: "global-class-name" }}>
    {item?.icon}
            </IconContext.Provider>
            </div>
      <div style={{textAlign:"left"}}>
        {item?.name}
      </div>
      <div className="profit-wrapper">
       <div  className="profit-heading">{item?.number}</div> 
<div style={{color:item?.isProfit?"green":"red",display:"flex",alignItems:"center"}}>{item?.isProfit? <IconContext.Provider value={{ color: "green", size: '30px', className: "global-class-name" }}>
<IoMdArrowDropup />
            </IconContext.Provider>:
            <IconContext.Provider value={{ color: "red", size: '30px', className: "global-class-name" }}>
           <IoMdArrowDropdown />
                    </IconContext.Provider>}{item.percent}%</div>
      </div>
       </div>
            </Grid>
    )
})}
          <Grid item xs={12} md={4}  className="grid-container">
       <div className="netprofit-container" >
        <div className="netprofit-wrapper">
        <div style={{textAlign:"left"}}>Net Profit</div>
        <div className="netprofit-heading">$6759.25</div>
        <div style={{color:"green",display:"flex",alignItems:"center"}}><IconContext.Provider value={{ color: "green", size: '30px', className: "global-class-name" }}>
<IoMdArrowDropup />
            </IconContext.Provider>3%</div>
      </div>
      <div className="progressbar-wrapper">
    <Box position="relative" display="inline-flex">
     <CircularProgress
        variant="determinate"
        sx={{color:'#7396ff',}} size={100} thickness={6}
        value={70}
      />
      <CircularProgress
        variant="determinate"
        sx={{color:'#22284e',position:'absolute'}} size={100} thickness={6}
        style={{ transform: `rotate(${firstDeg}deg)` }}
        value={30}
      />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="white">
             <div style={{fontSize:"16px",fontWeight:400}}>70%</div> 
            <div style={{fontSize:"8px"}}> Goal <br/> Completed</div> 
            </Typography>
          </Box>
        </Box> 
        <div style={{fontSize:"8px"}}>*The vlaues here have been rounded off</div>
</div>
        </div>
        </Grid>  
        </Grid>
      
    )
}
export default Profit;