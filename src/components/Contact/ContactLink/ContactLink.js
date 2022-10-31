import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './ContactLink.module.scss';

const cx = classNames.bind(styles);

function ContactLink({ icon, link }) {
    return (
        <a className={cx('wrapper')} href={link} target="_blank" rel="noreferrer">
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={icon} />
            </div>
        </a>
    );
}

export default ContactLink;
