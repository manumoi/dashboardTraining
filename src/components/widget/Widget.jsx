import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const Widget = ({type}) => {
   let data;
    const amount = 9999;
    const diff = 25;

   switch(type){
    case 'user':
        data={
            title:"USERS",
            isMoney:"false",
            link:"See all users",
            icon: (<GroupIcon className='icon' style={{color:"rgb(0,0,255)", background:"rgba(0, 0, 255, 0.2)"}}/>)
        };
        break;
    case 'order':
        data={
            title:"ORDERS",
            isMoney:"false",
            link:"View all orders",
            icon: (<ShoppingCartOutlinedIcon className='icon' style={{color:"rgb(120, 200, 50)", background:"rgba(120, 200, 50, 0.2)"}}/>)

        };
        break;
    case 'earning':
        data={
            title:"EARNINGS",
            isMoney:"true",
            link:"View all earnings",
            icon: (<MonetizationOnOutlinedIcon className='icon' style={{color:"rgb(200, 50, 50)", background:"rgba(200, 50, 50, 0.2)"}}/>)
        };
        break;
    case 'balance':
        data={
            title:"BALANCE",
            isMoney:"true",
            link:"See details",
            icon: (<AccountBalanceOutlinedIcon className='icon' style={{color:"rgb(120, 50, 200)", background:"rgba(120, 50, 2000, 0.2)"}}/>)
        };
        break;
    default:
        break;
   }


  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
        
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
        
    </div>
  )
}

export default Widget