import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Edu.module.scss';
import { Header } from '../Header';
import { EduMoment } from './EduMoment';
import { EduData } from '../../../assets/data/BigData';

const cx = classNames.bind(styles);

function Edu() {
    return (
        <div className={cx('wrapper')}>
            <Header name={'Education & Experience'} />
            <div className={cx('edu-moment')}>
                {EduData.map((edu, index) => (
                    <Fragment key={index}>
                        <EduMoment time={edu.time} title={edu.title} desc={edu.desc} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default Edu;
