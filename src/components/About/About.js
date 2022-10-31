import classNames from 'classnames/bind';
import styles from './About.module.scss';
import { Edu } from './Edu';
import { MySkill } from './MySkill';
import { Personal } from './Personal';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <Personal />
            <MySkill />
            <Edu />
        </div>
    );
}

export default About;
