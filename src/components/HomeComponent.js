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
  import { FadeTransform, Fade, Stagger } from 'react-animation-components';




//SAMPLE DATA TO BE CHANGED LATER
const data = [
{
    name: "Cloud9",
    short: "C9",
    likes: 4000,
    retweets: 2400,
    tweets: 2400
},
{
    name: "Team SoloMid",
    short: "TSM",
    likes: 3000,
    retweets: 1398,
    tweets: 2210
},
{
    name: "100 Thieves",
    short: "100T",
    likes: 2000,
    retweets: 9800,
    tweets: 2290
},
{
    name: "Team Liquid",
    short: "TL",
    likes: 2780,
    retweets: 3908,
    tweets: 2000
},
{
    name: "NRG Esports",
    short: "NRG",
    likes: 1890,
    retweets: 4800,
    tweets: 2181
},
{
    name: "Evil Genuinses",
    short: "EG",
    likes: 2390,
    retweets: 3800,
    tweets: 2500
},
{
    name: "Faze Clan",
    short: "Faze",
    likes: 3490,
    retweets: 4300,
    tweets: 2100
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
                
                <div className="container my-4">
                
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
                        <Bar dataKey="retweets" fill="#8884d8" />
                        <Bar dataKey="likes" fill="#82ca9d" />
                    </BarChart>

                    
                </div>

                {/* MIDDLE SECTION 
                Charts Package: https://github.com/recharts/recharts
                Examples: http://recharts.org/en-US/examples/StraightAnglePieChart
                */}

                <div className="container my-4">
                    <div className="row">
                        <div className="col-4">
                            <h3>Share Of Voice</h3>
                            <PieChart width={400} height={400}>
                                <Pie dataKey="likes" startAngle={359} endAngle={0} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
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
                                <XAxis />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="retweets" stroke="#8884d8" />
                                <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
                                <Line type="monotone" dataKey="tweets" stroke="#82ca9d" />
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
                        <div class="col">
                        <TwitterTweetEmbed tweetId={'1305899181081419782'}/>
                        </div>
                        <div class="col">
                        <TwitterTweetEmbed tweetId={'1323114712280801280'}/>
                        </div>
                        <div class="col">
                        <TwitterTweetEmbed tweetId={'1324776220651905026'}/>
                        </div>
                        <div class="col">
                        <TwitterTweetEmbed tweetId={'1324381207883321345'}/>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Home;