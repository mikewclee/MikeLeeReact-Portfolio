import React from 'react';
import peregrine from '../assets/images/Proj2-peregrine.JPG';
// import shotglass from '../assets/shotglass.png';
// import weather from '../assets/weather.png';
// import workday from '../assets/workday.png';
// import password from '../assets/password.png';

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
              <img className="portfolioImg" src={peregrine} alt="Peregrine app" />
           </div>
           <div className="column">
              <h3>SEARCH - DESTROY</h3>
              This application allows users to search for their favorite video games!. <br /><br />
              <a className="portfolio-link" href="https://peregrine-travel.herokuapp.com/">Deployed application</a>
              <a className="github-link" href="https://github.com/mikewclee/peregrine"> GitHub link</a>
           </div>
        </div>

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
              <img className="portfolioImg" src={peregrine} alt="Peregrine app" />
           </div>
           <div className="column">
              <h3>PEREGRINE</h3>
              This application provides an insider's look at travel, helping people to find niche spots with authentic experiences. User can create login and leave reviews. <br /><br />
              <a className="portfolio-link" href="https://peregrine-travel.herokuapp.com/">Deployed application</a>
              <a className="github-link" href="https://github.com/mikewclee/peregrine"> GitHub link</a>
           </div>
        </div>

        </div>

    );
}

export default Portfolio;