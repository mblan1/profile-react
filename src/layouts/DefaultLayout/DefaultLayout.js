import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

import { SideBar } from '../SideBar';
import { NightMode } from '../../components/NightMode';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <NightMode />
            <SideBar />
            <div className={cx('layout')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
