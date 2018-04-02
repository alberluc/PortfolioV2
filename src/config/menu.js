import Me from '@/components/pages/Me'
import Formations from '@/components/pages/Formations'
import Experiences from '@/components/pages/Experiences'
import Skills from '@/components/pages/Skills'
import Projects from '@/components/pages/Projects'
import Contact from '@/components/pages/Contact'

export const Menu = [
  {
    label: 'Moi',
    icon: '<i class="fas fa-user"></i>',
    route: {
      path: '/',
      name: 'me',
      component: Me
    }
  },
  {
    label: 'Formations',
    icon: '<i class="fas fa-graduation-cap"></i>',
    route: {
      path: '/formations',
      name: 'formations',
      component: Formations
    }
  },
  {
    label: 'Expériences',
    icon: '<i class="fas fa-flask"></i>',
    route: {
      path: '/experiences',
      name: 'experiences',
      component: Experiences
    }
  },
  {
    label: 'Compétences',
    icon: '<i class="fas fa-plus"></i>',
    route: {
      path: '/skills',
      name: 'skills',
      component: Skills
    }
  },
  {
    label: 'Projets',
    icon: '<i class="fas fa-briefcase"></i>',
    route: {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  },
  {
    label: 'Contact',
    icon: '<i class="fas fa-at"></i>',
    route: {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  }
];

export function getRoutes () {
  return Menu.map(item => item.route);
}
