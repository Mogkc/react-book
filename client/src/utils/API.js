import axios from 'axios';

const key = "AIzaSyAx-0mFQTirOBUKcxP-vy-RH8AdHSPh2yE";

export default {
    findBooks(searchParams) {
        searchParams.replace(" ", "+");
        const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${searchParams}&key=${key}`;
        return axios.get(searchURL);
    },

    getSavedBooks() {
        return axios.get("/api/books");
    },

    deleteBook(id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook(bookData) {
        return axios.post("/api/books", bookData);
    }
}