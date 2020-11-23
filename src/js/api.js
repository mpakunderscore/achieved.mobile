let url = 'https://achieved.space/cards'

const getMoviesFromApi = () => {
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};

let cards = []

exports.initAPI = () => {
    getMoviesFromApi().then(jsonCards => {
        cards = jsonCards
        console.log(cards)
    })
}
