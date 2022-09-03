import classNames from 'classnames/bind';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image() {
    return <div className={cx('image')}></div>;
}

export default Image;
