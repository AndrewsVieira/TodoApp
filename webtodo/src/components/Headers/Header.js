import logoutIcon from '../../img/logout_black_24dp.svg'
import confirmLogout from "../../utils/logout";
import { getToken } from '../../utils/auth';

export default function Header() {
    return (
        <header id="title" >
            <div className="header">
                <h1>To do list</h1>
                <img id="btnLogout" src={getToken() ? logoutIcon : ""} onClick={() => confirmLogout()} />
            </div>
        </header>
    );
}