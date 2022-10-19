import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ firstTitle, colorTitle, subTitle }) {
    return (
        <header className={cx('wrapper')}>
            <h1 className={cx('component')}>
                {firstTitle} <span className={cx('title')}>{colorTitle}</span>
            </h1>
            <span className={cx('sub_component')}>{subTitle}</span>
        </header>
    );
}

export default Header;
