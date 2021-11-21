import Config from "../utils/Config";
import { getToken } from "../utils/Auth";

export default async function tasksRequest() {
    const config = new Config();
    const url = `${config.URL}/tasks`;
    const token = getToken();
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    let res = await fetch(url, options);
    let data = await res.json();
    return data.tasks;
}