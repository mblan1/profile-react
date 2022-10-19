import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './TabMenu.module.scss';

import { PopUp } from './PopUp';
const cx = classNames.bind(styles);

function TabItem({ tab, data }) {
    const [popUp, setPopUp] = useState(false);
    const [count, setCount] = useState(1);
    const [newTab, setNewTab] = useState(tab);

    useEffect(() => {
        setNewTab(tab);
    }, [tab]);

    const handlePopUp = () => {
        setPopUp(true);
        console.log('popUP ' + popUp);
    };

    const handleClick = () => {
        handlePopUp();
    };

    if (newTab === 2) {
        const tabFilter = data.filter((file) => file.type === 'html');
        const result = tabFilter.map((p, index) => {
            return (
                <PopUp key={index} data={count} popup={popUp} setPopUp={setPopUp}>
                    <div
                        key={index}
                        onClick={() => {
                            handleClick();
                            setCount(p.id);
                        }}
                        className={cx('project-item')}
                        style={{ backgroundImage: `url(${p.bgImage})` }}
                    >
                        <h3 className={cx('project-name')}>{p.name}</h3>
                    </div>
                </PopUp>
            );
        });
        return result;
    } else if (newTab === 3) {
        const tabFilter = data.filter((file) => file.type === 'react');
        const result = tabFilter.map((p, index) => {
            return (
                <PopUp key={index} data={count} popup={popUp} setPopUp={setPopUp}>
                    <div
                        key={index}
                        onClick={() => {
                            handleClick();
                            setCount(p.id);
                        }}
                        className={cx('project-item')}
                        style={{ backgroundImage: `url(${p.bgImage})` }}
                    >
                        <h3 className={cx('project-name')}>{p.name}</h3>
                    </div>
                </PopUp>
            );
        });

        return result;
    } else {
        const result = data.map((p, index) => {
            return (
                <PopUp key={index} data={count} popup={popUp} setPopUp={setPopUp}>
                    <div
                        key={index}
                        onClick={() => {
                            handleClick();
                            setCount(p.id);
                        }}
                        className={cx('project-item')}
                        style={{ backgroundImage: `url(${p.bgImage})` }}
                    >
                        <h3 className={cx('project-name')}>{p.name}</h3>
                    </div>
                </PopUp>
            );
        });
        return result;
    }
}
export default TabItem;
