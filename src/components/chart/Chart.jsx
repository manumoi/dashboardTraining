import "./chart.scss";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name:"January", total:1200},
    { name:"February", total:1800},
    { name:"March", total:700},
    { name:"April", total:300},
    { name:"May", total:200},
    { name:"June", total:1000},
    
  ];


const Chart = () => {
  return (
    <div className="chart">
        <h1 className="title">Last 6 Months</h1>     
        <ResponsiveContainer width="100%" aspect={2/1}>
            <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="totalColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="purple" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#red" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="gray"/>
                <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
                <Tooltip />
                <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#totalColor)" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart