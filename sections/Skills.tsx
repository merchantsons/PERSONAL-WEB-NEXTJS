import React from 'react';
import SectionCard from '@components/SectionCard';
import SkillCard from '@components/SkillCard';
import styles from '@styles/Skills.module.sass';
import {
  skillcard_Languages,
  skillcard_Styles,
  skillcard_Frameworks,
} from '@sections/me';
import BgTitle from '@components/BgTitle';

const Skills = () => {
  return (
    // change your title and section id
    <SectionCard id='skills' title='TOOLS' page='02'>
      <>
        {<img src='skill.png' width='150' height='150' />}
        <BgTitle title='SKILLS' />

        <div className={styles.skillCardWrapper}>
          {/* add your skillcards here with their respective item. itemHeight represents the height of the container, required for proper position  */}
          <SkillCard items={skillcard_Languages} itemHeight={45} />
          <SkillCard items={skillcard_Styles} itemHeight={45} />
          <SkillCard items={skillcard_Frameworks} itemHeight={45} />
        </div>
      </>
    </SectionCard>
  );
};

export default Skills;
