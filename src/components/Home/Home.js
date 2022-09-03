import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Image from './Image';
import Text from './Text';
import ColorBlock from './ColorBlock/ColorBlock';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contains')}>
                <ColorBlock />
                <div className={cx('image')}>
                    <Image />
                </div>
                <div className={cx('text')}>
                    <Text />
                </div>
            </div>
        </div>
    );
}

export default Home;
