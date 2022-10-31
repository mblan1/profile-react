import classNames from 'classnames/bind';
import styles from './Skill.module.scss';

const cx = classNames.bind(styles);

// ..

function Skill({ logo, skillName }) {
    return (
        <div data-aos="fade-up" className={cx('wrapper')}>
            <div className={cx('img')}>
                <img className={cx('logo')} src={logo} alt="logo"></img>
            </div>
            <div className={cx('title')}>{skillName}</div>
        </div>
    );
}

export default Skill;
