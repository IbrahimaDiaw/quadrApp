import axios from 'axios'
/* eslint-disable */
export default () => {
    return axios.create({
        baseURL : `http://localhost:5000`
    })
}
