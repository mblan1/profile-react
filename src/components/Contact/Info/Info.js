import { faLocationDot, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import classNames from 'classnames/bind';
import styles from './Info.module.scss';

import { ContactLink } from '../ContactLink';
import { ContactItem } from '../ContactList';
const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('header')}>Don't be shy !</h3>
            <p className={cx('desc')}>
                Mọi thông tin liên hệ của mình ở bên dưới nhé, bạn có thể mail cho mình nếu thích &gt;&lt;
            </p>
            <ContactItem icon={faLocationDot} title={'address'} value={'VietNam'} />
            <ContactItem icon={faEnvelopeOpen} title={'Email'} value={'contact.lelan0508@gmail.com'} />
            <ContactItem icon={faPhone} title={'Phone'} value={'0763xxx861'} />
            <div className={cx('link')}>
                <ContactLink icon={faFacebook} link={'https://www.facebook.com/lanle.050802'} />
                <ContactLink icon={faInstagram} link={'https://www.instagram.com/lanle.050802/'} />
                <ContactLink icon={faGithub} link={'https://github.com/mblan1'} />
            </div>
        </div>
    );
}

export default Info;
