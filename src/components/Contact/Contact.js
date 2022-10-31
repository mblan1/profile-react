import classNames from 'classnames/bind';

import styles from './Contact.module.scss';

import { Info } from './Info';
import { MailForm } from './MailForm';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <Info />
            <MailForm />
        </div>
    );
}

export default Contact;
