import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ name }) {
    return <h3 className={cx('header')}>{name}</h3>;
}

export default Header;
