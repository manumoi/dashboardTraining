import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sidebar'> 
      <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">IDU ADMIN</span>
        </Link>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>      
          <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
          <p className="title">LISTS</p>
          <li>
            <Link to="/users/" style={{textDecoration:"none"}}>
              <GroupIcon className='icon'/>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products/" style={{textDecoration:"none"}}>
              <Inventory2OutlinedIcon className='icon'/>
              <span>Products</span>
            </Link>
          </li>
          <li><StoreRoundedIcon className='icon'/><span>Orders</span></li>
          <li><LocalShippingOutlinedIcon className='icon'/><span>Delivery</span></li>
          <p className="title">USEFUL</p>
          <li><AnalyticsOutlinedIcon className='icon'/><span>Stats</span></li>
          <li><NotificationsActiveOutlinedIcon className='icon'/><span>Notifications</span></li>
          <p className="title">SERVICES</p>
          <li><SettingsSystemDaydreamOutlinedIcon className='icon'/><span>System Health</span></li>
          <li><PsychologyOutlinedIcon className='icon'/><span>Logs</span></li>
          <li><SettingsOutlinedIcon className='icon'/><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountBoxOutlinedIcon className='icon'/><span>Profile</span></li>
          <li><LogoutOutlinedIcon className='icon'/><span>Logout</span></li>
        </ul>
      </div>
      <div className='bottom'>
         <div className="colorOption"></div>
         <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar