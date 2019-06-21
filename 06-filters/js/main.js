Vue.filter('reverse', (text) => text.split('').reverse().join(''));

const vm = new Vue({
    el: 'main',
    data: {
        search: '',
        min: 5,
        games: [
            { title: 'Witcher 3', gender: 'RPG', points: 10 },
            { title: 'Tomb Raider', gender: 'Action', points: 8 },
            { title: 'Fifa 2019', gender: 'Sports', points: 6 }
        ],
    },
    computed: {
        bestGames() {
            return this.games.filter(game => game.points >= this.min);
        },
        searchGames() {
            return this.games.filter(game => game.title.includes(this.search));
        }
    }
});