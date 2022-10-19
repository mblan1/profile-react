import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './PopUp.module.scss';
import Slider from './Slider';

import { MyProject } from '../../../../assets/projects/MyProject';

const cx = classNames.bind(styles);

function PopUp({ popup, setPopUp, data, children }) {
    const handleClose = () => {
        setPopUp(false);
    };

    const dataItem = MyProject[data - 1];
    return (
        <>
            {children}
            <div className={cx('wrapper', popup ? 'active' : 'none')}>
                <div className={cx('flex')}>
                    <div className={cx('contains')}>
                        <div onClick={handleClose} className={cx('x-btn')}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <div className={cx('project-slide')}>
                            <header className={cx('header')}>{dataItem.name}</header>
                            <Slider data={dataItem} />
                        </div>
                        <div className={cx('project-details')}>
                            <header className={cx('header')}>Movie app</header>
                            <p className={cx('desc')}>
                                フロントエンドはSCSSとReact,バックエンドはTMDB
                                APIを利用して、動画配信サービスのネットフリックスのようなWEBサイトを作成しました。
                            </p>
                            <ul>
                                <li className={cx('sub-desc')}>
                                    Created: <span className={cx('desc-data')}>20202</span>
                                </li>
                                <li className={cx('sub-desc')}>
                                    Role: <span className={cx('desc-data')}>20202</span>
                                </li>
                                <li className={cx('sub-desc')}>
                                    Fronted: <span className={cx('desc-data')}>20202</span>
                                </li>
                                <li className={cx('sub-desc')}>
                                    Backend: <span className={cx('desc-data')}>20202</span>
                                </li>
                                <li className={cx('sub-desc')}>
                                    Demo:{' '}
                                    <span className={cx('desc-data')}>
                                        <a className={cx('demo')} href="/">
                                            ahduood
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopUp;
