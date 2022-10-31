import classNames from 'classnames/bind';

import styles from './Text.module.scss';

import { Button } from '../../Button';
import config from '../../../config';

const cx = classNames.bind(styles);

function Text() {
    return (
        <div>
            <h1 className={cx('title')}>
                <div className={cx('name')}>I'm Le Ngoc Lan</div>
                <span>Web DEV !</span>
            </h1>

            <span className={cx('desc')}>
                Hello mọi người! Mình là Lân, đang là sinh viên năm 3 trường Đại học Mỏ - Địa Chất tại Hà Nội. Tháng
                3/2022, tình cờ biết đến cộng đồng F8 Fullstack của anh Sơn, mình đã hoàn thành các khóa học HTML, CSS,
                ReactJS và có được một số dự án cá nhân. Trải qua nhiều cay đắng, thật sự cảm ơn anh Sơn cũng như cộng
                đồng anh em đóng góp đã truyền động lực cho mình suốt thời gian qua giúp mình không bỏ cuộc.
            </span>

            <Button hoverClass="project-btn-hover" name={config.components.project} link={config.routes.project} />
            <Button className="about-btn" name={config.components.about} link={config.routes.about} />
        </div>
    );
}

export default Text;
