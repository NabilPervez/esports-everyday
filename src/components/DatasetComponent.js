import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";


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


/*
https://github.com/mbrn/material-table
*/

class Dataset extends Component {
    render() {
        return (
        <div className="container my-4">
            <h2>Dataset</h2>
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
            columns={[
                { title: "Name", field: "name" },
                { title: "Tag", field: "short" },
                { title: "Tweets", field: "tweets", type: "numeric" },
                { title: "Likes", field: "likes", type: "numeric" },
                { title: "Retweets", field: "retweets", type: "numeric" },
            ]}
            data={[
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
                },
            ]}
            title="NA Esports Teams"
            />
        </div>
        </div>
        );
    }
}

export default Dataset;