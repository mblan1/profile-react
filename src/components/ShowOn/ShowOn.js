import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ShowOn.module.scss';

const cx = classNames.bind(styles);
function ShowOn() {
    const [none, setNone] = useState(false);
    setTimeout(() => {
        setNone(true);
    }, 490);

    return <div className={cx('wrapper', none ? 'none' : '')}></div>;
}

export default ShowOn;
