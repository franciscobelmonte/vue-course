Vue.component('candidate', {
    props: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            default: 'fbelmonte@mail.es'
        },
        image: String,
        location: {
            type: Object,
            default () {
                return {
                    city: 'Valencia',
                }
            }
        },
    },
    template: '#candidate-template',
});

new Vue({
    el: 'main',
    mounted() {
        this.getCandidates();
    },
    data: {
        candidates: [],
    },
    methods: {
        getCandidates() {
            axios.get('https://randomuser.me/api/?results=100')
                .then((response) => {
                    this.candidates = response.data.results;
                });
        }
    }
});