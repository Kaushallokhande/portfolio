import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => {
  
  return (
    <div className={`flip-card`}>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
        <a href={project.image}>
            <img className='projectimg' src={project.image} alt='Image' />
          </a>
          <h3 className='title'>{project.name}</h3>
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
      </div>
    </div>
  );
};

export default ProjectContainer;
