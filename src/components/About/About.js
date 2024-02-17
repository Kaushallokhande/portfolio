import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about;
  const [typedName, setTypedName] = useState('');
  const typingSpeed = 150;

  useEffect(() => {
    let index = 0;
    const nameArray = name.split('');
    const typingInterval = setInterval(() => {
      setTypedName(prevName => prevName + nameArray[index]);
      index++;
      if (index === nameArray.length) clearInterval(typingInterval);
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [name]);

  return (
    <div className='about-container'>
      <div className='about center'>
        <h1>
          Hi, I am <span className='about__name'>{typedName}</span>.
        </h1>

        {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>

        <div className='about__contact center'>
          {resume && (
            <a href={resume} target="_main">
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                  target="_main"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                  target="_main"
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
      <div className="imageProfile">
        <img src="/pic.png" alt="Kaushal" width="400px" height="50%" />
      </div>
    </div>
  );
};

export default About;
