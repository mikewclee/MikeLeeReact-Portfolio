import React from 'react';
import peregrine from '../assets/images/Proj2-peregrine.JPG';
import searchgame from '../assets/images/Project1.jpg';
import burger from '../assets/images/burger.JPG';
import weather from '../assets/images/weather.jpg';
import scheduler from '../assets/images/Scheduler.jpg';
import notetaker from '../assets/images/notes.JPG';


function Portfolio() {
    return (
        <div className="main">
        <h1><b><i>PORTFOLIO</i></b></h1>

        <div className="row">
           <div className="column">
              <img className="portfolioImg" src={peregrine} alt="Peregrine app" />
           </div>
           <div className="column">
              <h3>PEREGRINE</h3>
              This application provides an insider's look at travel, helping people to find niche spots with authentic experiences. User can create login and leave reviews. <br /><br />
              <a className="portfolio-link" href="https://peregrine-travel.herokuapp.com/">Deployed application</a>
              <a className="github-link" href="https://github.com/mikewclee/peregrine"> GitHub link</a>
           </div>
        </div>

        <div className="row">
           <div className="column">
              <img className="portfolioImg" src={searchgame} alt="Search Game app" />
           </div>
           <div className="column">
              <h3>SEARCH - DESTROY</h3>
              This application allows users to search for their favorite video games!. <br /><br />
              <a className="portfolio-link" href="https://mikewclee.github.io/ColumbiaProject_-1/">Deployed application</a>
              <a className="github-link" href="https://github.com/mikewclee/ColumbiaProject_-1/"> GitHub link</a>
           </div>
        </div>

        <div className="row">
           <div className="column">
              <img className="portfolioImg" src={burger} alt="Eat-A-Burger app" />
           </div>
           <div className="column">
              <h3>Eat-A-Burger</h3>
              This application lets users add and devour their favorite burgers. <br /><br />
              <a className="portfolio-link" href="https://salty-oasis-71692.herokuapp.com/">Deployed application</a>
              <a className="github-link" href="https://github.com/mikewclee/burger"> GitHub link</a>
           </div>
        </div>
        <div className="row">
           <div className="column">
              <img className="portfolioImg" src={weather} alt="Weather app" />
           </div>
           <div className="column">
              <h3>5 Day Weather</h3>
              This application lets user type in any city to get the 5 day weather. <br /><br />
              <a className="portfolio-link" href="https://mikewclee.github.io/Weather-Dashboard/">Deployed application</a>
              <a className="github-link" href="https://github.com/mikewclee/Weather-Dashboard"> GitHub link</a>
           </div>
        </div>
        <div className="row">
           <div className="column">
              <img className="portfolioImg" src={scheduler} alt="Scheduler app" />
           </div>
           <div className="column">
              <h3>9 to 5 Scheduler</h3>
              This application allow users to plan their schedule from 9 to 5. <br /><br />
              <a className="portfolio-link" href="https://mikewclee.github.io/Work-Day-Scheduler">Deployed application</a>
              <a className="github-link" href="https://github.com/mikewclee/Work-Day-Scheduler"> GitHub link</a>
           </div>
        </div>
        <div className="row">
           <div className="column">
              <img className="portfolioImg" src={notetaker} alt="Note taker app" />
           </div>
           <div className="column">
              <h3>Note Taker</h3>
              This application allows users to write, save, and delete personal notes. <br /><br />
              <a className="portfolio-link" href="https://notes-takers-app.herokuapp.com/">Deployed application</a>
              <a className="github-link" href="https://github.com/mikewclee/Note-Taker-Express"> GitHub link</a>
           </div>
        </div>

        </div>

    );
}

export default Portfolio;