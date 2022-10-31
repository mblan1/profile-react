import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './TabMenu.module.scss';

import TabItem from './TabItem';

import { MyProject } from '../../../assets/data/BigData';

const cx = classNames.bind(styles);

function TabMenu() {
    const [tab, setTab] = useState(1);
    const Projects = MyProject;

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('tab-list')}>
                <li onClick={() => setTab(1)} className={cx('tab-item', tab === 1 ? 'active' : '')}>
                    ALL
                </li>
                <li onClick={() => setTab(2)} className={cx('tab-item', tab === 2 ? 'active' : '')}>
                    HTML/CSS/JS
                </li>
                <li onClick={() => setTab(3)} className={cx('tab-item', tab === 3 ? 'active' : '')}>
                    REACT/SCSS
                </li>
            </ul>
            <div className={cx('project')}>
                <div className={cx('project-contains')}>{<TabItem data={Projects} tab={tab} />}</div>
            </div>
        </div>
    );
}

export default TabMenu;
