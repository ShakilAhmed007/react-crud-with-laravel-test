const axios = window.axios;

const BASE_API_URL = 'http://127.0.0.1:8000/api';

export default {
    getAllNames: () =>
        axios.get(`${BASE_API_URL}/name`),
    getOneName: (id) =>
        axios.get(`${BASE_API_URL}/name/${id}/edit`),
    addName: (name) =>
        axios.post(`${BASE_API_URL}/name`, name),
    updateName: (name, id) =>
        axios.put(`${BASE_API_URL}/name/${id}`, name),
    deleteName: (id) =>
        axios.delete(`${BASE_API_URL}/name/${id}`)

}