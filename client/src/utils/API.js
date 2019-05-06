const key = process.env.API_Key;

export default (searchParams) => {
    searchParams.replace(" ", "+");
    const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${searchParams}&key=${key}`;
    // Use axios to make the api call to this address
}