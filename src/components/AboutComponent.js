import React, { Component, Fragment, ReactFragment } from 'react';


class About extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Nabil Pervez</h1>
                    <h2>A Modern Triple Threat</h2>
                    <h5>And Your New Best Friend</h5>
                </div>
            </div>

            <div className="container marketing" id="about">
            <h1 class="text-center py-2 mb-3">What Do I Do?</h1>
            <div class="row">
                <div class="col-lg-4">
                    <svg width="140" height="140" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                    </svg>

                    <h2>Full Stack Developer</h2>
                    <p>Combining a lifelong passion for technology with an never ending spree of wacky ideas lead to me learning to be a developer. My knowledge will include: Bootstrap, React, React Native, jQuery, NodeJS, and MongoDB.</p>
                </div>
                <div class="col-lg-4">
                    <svg width="140" height="140" viewBox="0 0 16 16" class="bi bi-kanban" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M13.5 1h-11a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z"/>
                        <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z"/>
                    </svg>
                    <h2>Project Manager</h2>
                    <p>Every team - no matter what size - needs someone who can see the whole pitch and call out whats coming next. I've lead small agile teams to full divisions to goals while being: on time, on budget, organized, and well communicated.</p>
                </div>
                <div class="col-lg-4">
                    <svg width="140" height="140" viewBox="0 0 16 16" class="bi bi-chat-left-quote" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path fill-rule="evenodd" d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                    </svg> 
                    <h2>All Around Marketer</h2>
                    <p>Everyone can use a little attention. However, the trick to good marketing is to understand how to cut through all the noise to make sure the right people hear your message. I've done this through all kinds of ways: branding, events, digital, influencer, and social media</p>
                </div>
            </div>

            <h2 class="mt-3">What's My Story?</h2>
                <hr class="featurette-divider"/>
                    <div class="row featurette">
                        <div class="col-md-7">
                        <h2 class="featurette-heading portait">I'm A Bit Rebellious<span class="text-muted"> (The Good Kind)</span></h2>
                        <p class="lead">
                            I constantly challenge the norms in everything I do. 
                            While my friends went to college, got married, and found a stable home life - I dropped out of college to work at start ups I believed in. 
                            I took risks, made mistakes, and learned quickly to get good at whatever I was tackling at the time.
                            I am always chasing a new challenge to master and that has come in many different forms. Let me explain.
                        </p>
                        </div>
                        <div class="col-md-5">
                            <img class="featurette-image img-fluid mx-auto portait" src="http://nabilpervez.com/wp-content/uploads/2020/02/Infinite_Headshots-23-s.jpg" alt="500x500" id="longPhoto"/>
                        </div>
                    </div>
                    
                <hr class="featurette-divider"/>
                    <div class="row featurette">
                        <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">I Work In Gaming, Nerd Culture <span class="text-muted">(And Esports)</span></h2>
                        <p class="lead">
                            I first began working in esports as a shoutcaster. 
                            Remember those guys that talk about the plays in the sports games as you are watching? 
                            I did that for video games for years. I've called matches in front of tens of thousands of people.
                            I've worked with multi-million dollar companies to do it for them.
                            I made a lot of good friends and memories doing it, but working in front of the camera wasn't always stable work. 
                            I found myself expanding into a role behind the scenes.
                        </p>
                        </div>
                        <div class="col-md-5 order-md-1">
                            <img class="featurette-image img-fluid mx-auto portait" alt="500x500" src="https://pbs.twimg.com/profile_images/1322940756823285760/5mXm15aq_400x400.jpg"/>
                        </div>
                    </div>

                <hr class="featurette-divider"/>
                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">I Give A Voice To Those Who Need It <span class="text-muted">Teams, Startups, Influencers</span></h2>
                            <p class="lead">
                                I began to transistion into marketing roles over the years. I ran marketing campaigns for large variety of esports clients: streaming teams, news networks, academies, multimillion dollar teams, and companies.
                                My skillset ranged from project management, digital marketing, influencer marketing, event marketing, and data analysis.
                                I put together all those skills to make whatever crazy idea I have the moment. Some of them win awards sometimes.
                            </p>
                        </div>
                        <div class="col-md-5">
                            <img class="featurette-image img-fluid mx-auto landscape" src="http://nabilpervez.com/wp-content/uploads/2019/09/desktop_outlaws_promotional-1024x576.jpg"/>
                        </div>
                    </div>
                
                <hr class="featurette-divider"/>
                    <div class="row featurette">
                        <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Now I'm A Web Developer.<span class="text-muted"> With A lot Of Ideas To Be Made.</span></h2>
                            <p class="lead">
                                I still have a ton of ideas in my head that I believe would be really fun to have come to fruitition. I want to build things that people find useful.
                                Building all those ideas that I have shower thoughts about is my latest challenge and passion.
                                If you have an idea we can work on together - feel free to reach out to me.
                            </p>
                        </div>
                        <div class="col-md-5 order-md-1">
                            <img class="featurette-image img-fluid mx-auto landscape" src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"/>
                        </div>
                    </div>
            </div>
            
        </React.Fragment>
        );
    }
}


export default About;