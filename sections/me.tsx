import {
  faHome,
  faRobot,
  faWindowMaximize,
  faFileCode,
  faCodeBranch,
  faUpRightFromSquare,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faBootstrap,
  faNodeJs,
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'; // types

import {
  NavLinkType,
  ProjectCardType,
  SkillItemType,
  SocialLinkType,
} from 'types'; // icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomIcon from '@components/CustomIcon'; //
// COPY THIS FILE AND RENAME IT TO 'projectData' and add your own data
//
//
// THEMES
//
// change your theme colors here

export const lightTheme = {
  // font-color
  color: '#000',
  // background-color
  backgroundColor: '#fff'
};
export const darkTheme = {
  color: '#fff',
  backgroundColor: '#000',
}; //
// NAVIGATION
//
// add your navbar items here
// make sure the path name matches your section id so the window can scroll to each section

export const links: NavLinkType[] = [
  {
    name: 'intro',
    path: '#intro',
    icon: (
      <FontAwesomeIcon
        icon={faHome}
        title='scroll to section: intro'
        size='lg'
      />
    ),
  },
  {
    name: 'software',
    path: '#skills',
    icon: (
      <FontAwesomeIcon
        icon={faFileCode}
        title='scroll to section: software'
        size='lg'
      />
    ),
  },
  {
    name: 'projects',
    path: '#projects',
    icon: (
      <FontAwesomeIcon
        icon={faWindowMaximize}
        title='scroll to section: projects'
        size='lg'
      />
    ),
  },
  {
    name: 'contact',
    path: '#contact',
    icon: (
      <FontAwesomeIcon
        icon={faComments}
        title='scroll to section: contact'
        size='lg'
      />
    ),
  },
]; //
// SOCIAL LINKS
//
// add your social buttons here

export const socialLinks: SocialLinkType[] = [
  {
    icon: <FontAwesomeIcon icon={faGithub} title='github' size='2x' />,
    link: '#',
    title: 'github',
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} title='linkedIn' size='2x' />,
    link: '#',
    title: 'linkedIn',
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} title='twitter' size='2x' />,
    link: '#',
    title: 'twitter',
  },
]; //
// PROJECT CARDS
//
// add your project data object into this array


// SKILL CARDS
//
// change your skill cards here
// each item will be a column of cards
// create as many or as few as you like

export const skillcard_Styles: SkillItemType[] = [
  {
    text: 'JavaScript',
    icon: <FontAwesomeIcon icon={faJs} size='2x' />,
    skillLevel: '80%',
  },
  {
    text: 'TypeScript',
    icon: <CustomIcon path='/icons/typescript-icon.png' size={45} />,
    skillLevel: '15%',
  },
  {
    text: 'React',
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    skillLevel: '20%',
  },
  {
    text: 'Next',
    icon: <CustomIcon path='/icons/next-js.256x256.png' size={46} />,
    skillLevel: '50%',
  },
];
export const skillcard_Languages: SkillItemType[] = [
  {
    text: 'HTML5',
    icon: <FontAwesomeIcon icon={faHtml5} size='2x' />,
    skillLevel: '50%',
  },
  {
    text: 'CSS',
    icon: <FontAwesomeIcon icon={faCss3} size='2x' />,
    skillLevel: '40%',
  },
  {
    text: 'SASS',
    icon: <FontAwesomeIcon icon={faSass} size='2x' />,
    skillLevel: '60%',
  },
  {
    text: 'Tailwind',
    icon: <CustomIcon path='/icons/tailwind-icon.png' size={45} />,
    skillLevel: '54%',
  },
];
export const skillcard_Frameworks: SkillItemType[] = [
  {
    text: 'Redux',
    icon: <CustomIcon path='/icons/icons8-redux-150.png' size={39}  />,
    skillLevel: '11%',
  },
  {
    text: 'Node',
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'Cypress',
    icon: <CustomIcon path='/icons/cypress-icon.png' size={40} />,
    skillLevel: '50%',
  },
  {
    text: 'Jest',
    icon: <CustomIcon path='/icons/jest-icon.png' size={45} />,
    skillLevel: '44%',
  },
];
