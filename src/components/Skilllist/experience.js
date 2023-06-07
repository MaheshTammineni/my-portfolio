import TimelineView from '../Experience-Timeline/TimelineView'
import React from 'react';

const timelineItemsList = [
    {
      id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
      categoryId: 'COURSE',
      title: 'January 2021 - March 2023',
      courseTitle: 'HCL Technologies Limited',
      description:
        'I have worked on Front-End of web application using angular framework developed UI responsive in desktop and mobile view and designed new layout of screens fixing browser compatibility issues and development defects and building logic for to achieve required functionality',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
      duration: '2.2 Years',
      tagsList: [
        {
          id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
          name: 'Angular',
        },
        {
          id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
          name: 'HTML',
        },
        {
          id: 'c31b2dee-f766-11eb-9a03-0242ac130003',
          name: 'CSS',
        },
        {
          id: 'c31b2eb6-f766-11eb-9a03-0242ac130003',
          name: 'Bootstrap',
        },
        {
          id: 'c31b2f6a-f766-11eb-9a03-0242ac130003',
          name: 'CoreUI',
        },
        {
          id: 'c31b347e-f766-11eb-9a03-0242ac130003',
          name: 'JavaScript',
        },
        {
          id: 'c31b358c-f766-11eb-9a03-0242ac130003',
          name: 'NodeJs',
        },
      ],
    },
  
    {
        id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4h',
        categoryId: 'COURSE',
        title: 'April 2023 - Present',
        courseTitle: 'Tata Consultancy Services',
        description:
          'Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.',
        duration: '0.2 Years',
        tagsList: [
          {
            id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
            name: 'ReactJs',
          },
          {
            id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
            name: 'HTML',
          },
          {
            id: 'c31b2dee-f766-11eb-9a03-0242ac130003',
            name: 'CSS',
          },
          {
            id: 'c31b2eb6-f766-11eb-9a03-0242ac130003',
            name: 'Bootstrap',
          },
          {
            id: 'c31b2f6a-f766-11eb-9a03-0242ac130003',
            name: 'Box Properties',
          },
          {
            id: 'c31b347e-f766-11eb-9a03-0242ac130003',
            name: 'Layout',
          },
          {
            id: 'c31b358c-f766-11eb-9a03-0242ac130003',
            name: 'Flexbox',
          },
        ],
      },
  
   
  ]
  
const Experience = () => <TimelineView timelineItemsList={timelineItemsList} />

export default Experience