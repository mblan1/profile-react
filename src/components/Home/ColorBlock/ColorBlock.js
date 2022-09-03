import classNames from 'classnames/bind';

import styles from './ColorBlock.module.scss';

const cx = classNames.bind(styles);

function ColorBlock() {
    return <div className={cx('color-block')}></div>;
}

export default ColorBlock;
