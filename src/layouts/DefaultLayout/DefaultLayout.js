import { SideBar } from '../SideBar';
import { NightMode } from '../../components/NightMode';
function DefaultLayout({ children }) {
    return (
        <div>
            <NightMode />
            <SideBar />
            <div>{children}</div>
        </div>
    );
}

export default DefaultLayout;
