import { CgMenuGridO } from 'react-icons/cg';
import './headerNav.css';
import { IconContext } from 'react-icons';
import { Grid } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import avatar from '../../Assets/avatar.png';
const HeaderNav=()=>{
    return(
        <div className="nav-container">
            <Grid container xs={12} alignItems={"center"} justifyContent={"flex-start"}>
                <Grid item xs={1}>
                    <div className='menuicon-container'>
            <IconContext.Provider value={{ color: "#7592f5", size: '40px', className: "global-class-name" }}>
            <CgMenuGridO/>
            </IconContext.Provider>
            </div>
            </Grid>
            <Grid item  xs={6} md={9}>
                <div className='search-wrapper'>
                <IconContext.Provider value={{ color: "white", size: '20px', className: "global-class-name" }}>
            <CiSearch />
            </IconContext.Provider>
                <input placeholder='Search' type="text"/>
                </div>
            </Grid>
            <Grid item xs={1} md={0.5}>
<div className="icons-wrapper">
<IconContext.Provider value={{ color: "white", size: '15px', className: "global-class-name" }}>
<MdEmail />
</IconContext.Provider>
    </div>
    </Grid>
    <Grid item xs={1} md={0.5}>
<div className="icons-wrapper">
<IconContext.Provider value={{ color: "white", size: '15px', className: "global-class-name" }}>
<IoSettingsOutline />
</IconContext.Provider>
    </div>
    </Grid>
    <Grid item xs={1} md={0.5}>
<div className="icons-wrapper">
<IconContext.Provider value={{ color: "white", size: '15px', className: "global-class-name" }}>
<IoMdNotificationsOutline />
</IconContext.Provider>
    </div>
    </Grid>
    <Grid item xs={1} md={0.5}>
<div className="icons-wrapper">
<img src={avatar} width="30px" height="30px" alt="profile" style={{borderRadius:"50%"}} />
    </div>
    </Grid>
            </Grid>
        </div>
    )
}
export default HeaderNav;