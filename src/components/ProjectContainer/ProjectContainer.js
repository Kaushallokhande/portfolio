import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    let timeoutId;
    if (isFlipped) {
      timeoutId = setTimeout(() => {
        setIsFlipped(false);
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [isFlipped]);


  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <h3 className='title'>{project.name}</h3>
          <p className='project__description'>{project.description}</p>
          {project.stack && (
            <ul className='project__stack'>
              {project.stack.map((item) => (
                <li key={uniqid()} className='project__stack-item'>
                  {item}
                </li>
              ))}
            </ul>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon'
              target='_'
              id='cardicon'
            >
              <GitHubIcon />
            </a>
          )}
          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
              className='link link--icon'
              target='_'
              id='cardicon'
            >
              <LaunchIcon />
            </a>
          )}
        </div>
        <div className='flip-card-back'>
          <a href={project.image}>
            <img className='projectimg' src={project.image} alt='Image' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
