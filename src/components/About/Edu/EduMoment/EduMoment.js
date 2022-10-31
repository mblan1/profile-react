import classNames from 'classnames/bind';
import styles from './EduMoment.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function EduMoment({ time, title, desc }) {
    return (
        <div data-aos="flip-up" className={cx('wrapper')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className={cx('contain')}>
                <span className={cx('time')}>{time}</span>
                <h3 className={cx('name')}>{title}</h3>
                <p className={cx('desc')}>{desc}</p>
            </div>
        </div>
    );
}

export default EduMoment;
