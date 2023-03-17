import classNames from 'classnames/bind';
import styles from './Personal.module.scss';

import { Details } from './Details';
import { Card } from './Card';
import { Button } from '../../Button';

const cx = classNames.bind(styles);

function Personal() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('header')}>Personal Infos</h3>
            <div className={cx('contains')}>
                <div data-aos="fade-up-right" className={cx('info')}>
                    <div className={cx('detail')}>
                        <div className={cx('detail_1')}>
                            <Details title={'First Name'} value={'Le'} />
                            <Details title={'Last Name'} value={'Lan'} />
                            <Details title={'Birthday'} value={'20 Years'} />
                            <Details title={'Sex'} value={'Male'} />
                            <Details title={'Nationality'} value={'VietNamese'} />
                            <Details title={'Address'} value={'Thanh Hoa'} />
                            <Details title={'Phone'} value={'0763xxx861'} />
                            <Details title={'Facebook'} value={'facebook.com/lanle.050802'} />
                            <Details title={'Language'} value={'Vietnamese, English'} />
                            <Details title={'Email'} value={'contact.lelan0508@gmail.com'} />
                        </div>
                    </div>
                    <Button hoverClass={'personal-btn'} name="CV" link="#" />
                </div>

                {/* card */}
                <div data-aos="fade-up-left" className={cx('card')}>
                    <Card count={'0'} value={'Year(s) Experience'} />
                    <Card count={'4'} value={'Completed Project(s)'} />
                </div>
            </div>
        </div>
    );
}

export default Personal;
