import styles from './Details.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Details({ title, value }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>{title}:</div>
            <span className={cx('info_desc')}>{value}</span>
        </div>
    );
}

export default Details;
