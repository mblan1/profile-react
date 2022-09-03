import classNames from 'classnames/bind';
import { faHouse, faBriefcase, faUser, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

import Nav from './Nav';
import NavMenu from './NavMenu';
import config from '../../config';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <NavMenu>
                <Nav to={config.routes.home} component={config.components.home} icon={faHouse} />
                <Nav to={config.routes.project} component={config.components.project} icon={faBriefcase} />
                <Nav to={config.routes.about} component={config.components.about} icon={faUser} />
                <Nav to={config.routes.contact} component={config.components.contact} icon={faEnvelopeOpen} />
            </NavMenu>
        </aside>
    );
}

export default SideBar;
