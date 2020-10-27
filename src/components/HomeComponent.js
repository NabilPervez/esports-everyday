import React, { Component }  from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    Bar,
    BarChart,
    PieChart, Pie, Sector, Cell,
  } from "recharts";

//SAMPLE DATA TO BE CHANGED LATER
const data = [
{
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
},
{
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
},
{
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
},
{
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
},
{
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
},
{
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
},
{
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
}
];

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                
                {/* TOP SECTION 
                Charts Package: https://github.com/recharts/recharts
                Examples: http://recharts.org/en-US/examples/StraightAnglePieChart
                */}
                
                <div className="container">
                    <h3>Teams Engagement Ranking</h3>
                    <BarChart
                        width={1000}
                        height={300}
                        data={data}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>

                {/* MIDDLE SECTION 
                Charts Package: https://github.com/recharts/recharts
                Examples: http://recharts.org/en-US/examples/StraightAnglePieChart
                */}

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h3>Share Of Voice</h3>
                            <PieChart width={400} height={400}>
                                <Pie dataKey="amt" startAngle={359} endAngle={0} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                            </PieChart>
                        </div>
                        <div className="col">
                            <h3>Engagement Over Time</h3>
                            <LineChart
                                width={730}
                                height={250}
                                data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION 
                Twitter Package: https://www.npmjs.com/package/react-twitter-embed
                
                */}

                <div className="container">
                    <h2>Top Tweets</h2>
                    <div className="row">
                        <TwitterTweetEmbed tweetId={'1305899181081419782'}/>
                        <TwitterTweetEmbed tweetId={'1305899181081419782'}/>
                        <TwitterTweetEmbed tweetId={'1305899181081419782'}/>
                    </div>

                </div>
                
            </React.Fragment>
        );
    }
}

export default Home;