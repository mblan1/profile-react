import classNames from 'classnames/bind';
import styles from './MySkill.module.scss';
import { Skill } from './Skill';

import { SkillData } from '../../../assets/data/BigData';
import { Header } from '../Header';
import { Fragment } from 'react';
const cx = classNames.bind(styles);

function MySkill() {
    return (
        <div className={cx('wrapper')}>
            <Header name={'My Skills'} />
            <div className={cx('skill')}>
                {SkillData.map((skill, index) => (
                    <Fragment key={index}>
                        <Skill logo={skill.logo} skillName={skill.skillName} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default MySkill;
