import Me from '@/components/Pages/Me'
import Formations from '@/components/Pages/Formations'
import Experiences from '@/components/Pages/Experiences'
import Skills from '@/components/Pages/Skills'
import Projects from '@/components/Pages/Projects'
import Contact from '@/components/Pages/Contact'

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
