import React from 'react';
import ProjectCard from '@components/ProjectCard';
import SectionCard from '@components/SectionCard';

import BgTitle from '@components/BgTitle';

const Projects = () => {
  return (
    // change your title and section id
    <SectionCard id='projects' title='PROJECTS' page='03'>
      <div style={{ position: 'relative' }}>
        {/* <BgTitle title='WORK' />

        {projectData.map((p, i) => (
          <ProjectCard project={p} key={i} />
        ))} */}

        <p>
          <a href='#'><>1. ATM PROJECT IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>2. BANK SYSTEM IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>3. TODO APP IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>4. QUIZ IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>5. WORD COUNTER IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>6. CALCULATOR IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>7. STUDENT MANAGEMENT - SYSTEM IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>8. CURRANCY CONVERTOR - SYSTEM IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>9. ADVENTUR GAME IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>10. GUESS THE NUMBER GAME IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>11. OOP PROJECT IN TYPESCRIPT</><br /><br /></a>
          <a href='#'><>12. TODO APP IN NEXTJS</><br /><br /></a>
          <a href='#'><>13. PERSONAL PROFILE - IN NEXTJS</><br /><br /></a>
          <a href='#'><>14. ECOMMERCE WEBSIT - IN NEXTJS</><br /><br /></a>
        </p>
      </div>
    </SectionCard>
  );
};

export default Projects;
