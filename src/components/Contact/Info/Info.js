import { faLocationDot, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Info.module.scss';

import { ContactLink } from '../ContactLink';
import { ContactItem } from '../ContactList';
const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('header')}>Don't be shy !</h3>
            <p className={cx('desc')}>dashdj oasjdoiasjd oiasjdoisad opijasdipojasd opisajdiasd</p>
            <ContactItem icon={faLocationDot} title={'address'} value={'VietNam'} />
            <ContactItem icon={faEnvelopeOpen} title={'Email'} value={'contact.lelan0508@gmail.com'} />
            <ContactItem icon={faPhone} title={'Phone'} value={'0763094xxx'} />
            <div className={cx('link')}>
                <ContactLink icon={faPhone} link={'https://www.facebook.com/'} />
                <ContactLink icon={faPhone} link={'https://www.facebook.com/'} />
            </div>
        </div>
    );
}

export default Info;
