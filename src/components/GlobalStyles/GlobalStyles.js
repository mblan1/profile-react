import './GlobalStyles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
    delay: 200,
});

function GlobalStyles({ children }) {
    return children;
}

export default GlobalStyles;
