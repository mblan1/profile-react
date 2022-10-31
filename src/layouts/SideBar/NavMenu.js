import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function NavMenu({ children }) {
    return <nav className={cx('nav')}>{children}</nav>;
}

export default NavMenu;
