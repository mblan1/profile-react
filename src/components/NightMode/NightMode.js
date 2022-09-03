import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

import styles from './NightMode.module.scss';
import { useEffect, useState } from 'react';

const cx = classnames.bind(styles);
function NightMode() {
    const [theme, setTheme] = useState('dark');
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const handleToggleTheme = () => {
        setTheme(nextTheme);
    };
    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <button onClick={handleToggleTheme} className={cx('wrapper')}>
            <div className={cx('icon', theme === 'light' ? 'block' : '')}>
                <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div className={cx('icon', theme === 'light' ? '' : 'block')}>
                <FontAwesomeIcon icon={faMoon} />
            </div>
        </button>
    );
}

export default NightMode;
