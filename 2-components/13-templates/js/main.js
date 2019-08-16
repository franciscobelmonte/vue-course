Vue.component('winner', {
    props: ['people'],
    template: '#winner-template',
    methods: {
        whoIsTheWinner() {
            let length = this.participants.length;
            let index = Math.floor((Math.random() * length));
            this.winner = this.participants[index - 1];
        }
    },
    data() {
        return {
            winner: false,
            participants: this.people
        }
    },
});

new Vue({
    el: 'main',
    data: {
        people: [
            'Fran', 'Jose', 'Bea', 'Celia', 'Alex'
        ]
    },
});