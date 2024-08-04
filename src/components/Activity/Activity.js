import { colors, Grid } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import './activity.css';
import { IconContext } from "react-icons";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { LuGoal } from "react-icons/lu";
import { BiDish } from "react-icons/bi";
import { PiHamburgerBold } from "react-icons/pi";

const Activity=()=>{
 
    const series=[
        {
                  data: [
                   4,4.5,6.5,5.5,2,7.5,9,16,4.5,11,6,0
                  ],
                },
                {
                    data: [
                     10,3,6.5,5,7,6,12,12,6,7,0
                    ],
                  },
                  {
                    data: [
                     0,0,6,0,0,11,0,8,0,0
                    ],
                  },
    ]

    return(
        <Grid container xs={12} md={12} spacing={3} justifyContent={"center"} alignItems={"center"} >
<Grid item xs={12} md={8} className="grid-container"> 
<div className="graph-container">
    <div className="activity-wrapper">
        <div style={{fontSize:"18px",fontWeight:600}}>Activity</div>
    <div className="dropdown-time">Weekly
    <IconContext.Provider value={{ color: "white", size: '15px', className: "global-class-name" }}>
           <IoMdArrowDropdown />
                    </IconContext.Provider>
    </div>
    </div>
    <BarChart
    colors={['#7592f5']}
    grid={{ horizontal: true }}
      series={series}
      xAxis={[{ scaleType: 'band', data: [5,9,11,13,15,17,19,21,23,25,27],disableTicks:"true",tickLabelPlacement:"start", categoryGapRatio: 0.02,tickLabelStyle:{fontSize:"12px",fill:"white"}}]}
      yAxis={[{valueFormatter: (value) =>{ if(value!==0){return`${(value).toLocaleString()}K`}else{return value}},disableTicks:"true", disableLine:true,tickLabelStyle:{fontSize:"12px",fill:"white"}}]}
      height={250}
      tooltip={{trigger:'none'}}
      slotProps={{
        bar: {
          rx: 10,
          ry: 10,
        }
      }}
    />
</div>
</Grid>
<Grid item xs={12} md={4} className="grid-container"> 
<div className="item-wrapper">
<div className="goal-wrapper">
  <div className="icon-wrpper" style={{backgroundColor:'rgba(94,52,56,255)'}}>
<IconContext.Provider value={{ color: "rgba(242,94,95,255)", size: '30px', className: "global-class-name" }}>
<LuGoal />
                    </IconContext.Provider>
                    </div>
  Goals
  <div className="forward-wrapper">
  <IconContext.Provider value={{ color: "white", size: '20px', className: "global-class-name" }}>
<IoIosArrowForward />
                    </IconContext.Provider>
                    </div>
</div>
<div className="goal-wrapper">
  <div className="icon-wrpper" style={{backgroundColor:'rgba(41,50,100,255)'}}>
<IconContext.Provider value={{ color: "rgba(94,129,227,255)", size: '30px', className: "global-class-name" }}>
<PiHamburgerBold />
                    </IconContext.Provider>
                    </div>
  Popular Dishes
  <div className="forward-wrapper">
  <IconContext.Provider value={{ color: "white", size: '20px', className: "global-class-name" }}>
<IoIosArrowForward />
                    </IconContext.Provider>
                    </div>
</div>
<div className="goal-wrapper">
  <div className="icon-wrpper" style={{backgroundColor:'rgba(32,74,96,255)'}}>
<IconContext.Provider value={{ color: "rgba(45,130,173,255)", size: '30px', className: "global-class-name" }}>
<BiDish />

                    </IconContext.Provider>
                    </div>
 Menus
  <div className="forward-wrapper">
  <IconContext.Provider value={{ color: "white", size: '20px', className: "global-class-name" }}>
<IoIosArrowForward />
                    </IconContext.Provider>
                    </div>
</div>
</div>
</Grid>
        </Grid>
    )
}
export default Activity;
