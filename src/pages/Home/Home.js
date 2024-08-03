import HeaderNav from "../../components/HeaderNav/HeaderNav";
import SideNav from "../../components/SideNav/SideNav";
import './home.css';
import Profit from "../../components/Profit/Profit";
import { Grid } from "@mui/material";
import Activity from "../../components/Activity/Activity";
import RecentOrder from "../../components/RecentOrder/RecentOrder";

const Home=()=>{

    return(
        <div className="App">
     <HeaderNav />
     <div className="main-container">
     <SideNav />
     <div className="dashboard-wrapper"> 
        <Grid container xs={12} className="heading-container"><h2>Dashboard</h2></Grid>
        <Profit />
     <Activity />
     <RecentOrder />
     </div>
     </div>
        </div>
    )
}
export default Home;