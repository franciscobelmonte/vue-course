const vm = new Vue({
    el: 'main',
    data: {
        people: []
    },
    methods: {
        loadPeople() {
            axios.get('https://randomuser.me/api/?results=50')
                .then((response) => {
                    console.log(response);
                    this.people = response.data.results;
                });
        }
    },
    mounted() {
        this.loadPeople();
    }
});