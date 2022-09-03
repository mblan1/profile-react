import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);
function Nav({ to, component, icon }) {
    return (
        <div className={cx('hover')}>
            <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={to}>
                <div className={cx('title')}>
                    <div className={cx('component')}>{component}</div>
                </div>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={icon} />
                </div>
            </NavLink>
        </div>
    );
}

export default Nav;
