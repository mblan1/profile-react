// Pages
import HomePage from '../pages/Home/HomePage';
import ContactPage from '../pages/Contact/ContactPage';
import ProjectPage from '../pages/Project/ProjectPage';
import AboutPage from '../pages/About/AboutPage';

const profilePage = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/project',
        component: ProjectPage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path: '/contact',
        component: ContactPage,
    },
];

export { profilePage };
