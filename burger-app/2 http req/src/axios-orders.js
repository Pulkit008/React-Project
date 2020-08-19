import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a461f.firebaseio.com/'
});

export default instance;