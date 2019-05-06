import axios from 'axios';

const key = process.env.API_Key;

export default (searchParams) => {
    searchParams.replace(" ", "+");
    const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${searchParams}&key=${key}`;
    return axios.get(searchURL);
}