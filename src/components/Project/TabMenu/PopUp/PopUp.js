import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './PopUp.module.scss';
import Slider from './Slider';

import { MyProject } from '../../../../assets/data/BigData';

const cx = classNames.bind(styles);

function PopUp({ popup, setPopUp, data, children }) {
    const handleClose = () => {
        setPopUp(false);
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (popup) {
                setPopUp(false);
                console.log('Pressed Escape button');
            }
        }
    });

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
                            <header className={cx('header')}>{dataItem.app}</header>
                            <p className={cx('desc')}>{dataItem.desc}</p>
                            <ul>
                                <li className={cx('sub-desc')}>
                                    Created: <span className={cx('desc-data')}>{dataItem.created}</span>
                                </li>
                                <li className={cx('sub-desc')}>
                                    Role: <span className={cx('desc-data')}>{dataItem.role}</span>
                                </li>
                                <li className={cx('sub-desc')}>
                                    Fronted: <span className={cx('desc-data')}>{dataItem.frontend}</span>
                                </li>
                                <li className={cx('sub-desc')}>
                                    Backend: <span className={cx('desc-data')}>{dataItem.backend}</span>
                                </li>
                                <li className={cx('sub-desc')}>
                                    Demo:{' '}
                                    <span className={cx('desc-data')}>
                                        <a className={cx('demo')} href={dataItem.demo} target="_blank" rel="noreferrer">
                                            {dataItem.demo}
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
