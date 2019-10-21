import React from 'react'; 
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() 
{ 
        return <div className='Icons-List'>
        <a
          className="linkedin social App-link Social-media-list"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className="github App-link Social-media-list"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className="fatwitter App-link Social-media-list"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
</div>  }

export default Footer;