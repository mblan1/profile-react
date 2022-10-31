import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ContactItem.module.scss';

const cx = classNames.bind(styles);

function ContactItem({ icon, title, value }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className={cx('contain')}>
                <span className={cx('title')}>{title}</span> <br />
                <span className={cx('value')}>{value}</span>
            </div>
        </div>
    );
}

export default ContactItem;
