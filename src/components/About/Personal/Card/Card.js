import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ count, value }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('count')}>
                {count}
                <sup>+</sup>
            </div>
            <div className={cx('value')}>{value}</div>
        </div>
    );
}

export default Card;
