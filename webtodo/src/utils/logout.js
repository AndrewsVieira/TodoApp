import { logout } from "./auth";
export default function confirmLogout() {
    let isLogout = window.confirm("Deseja realizar o logout?");
    if (isLogout) {
        logout();
        window.document.href = '/';
    }
}