export default class Config {
    constructor() {
        this.PROTOCOL = 'http'
        this.HOST = 'localhost';
        this.PORT = '9999';
        this.URL = `${this.PROTOCOL}://${this.HOST}:${this.PORT}`
    }
}