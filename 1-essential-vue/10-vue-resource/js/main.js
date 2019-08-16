const vm = new Vue({
    el: 'main',
    data: {
        people: []
    },
    methods: {
        loadPeople() {
            this.$http
                .get('https://randomuser.me/api/?results=50')
                .then((response) => {
                    console.log(response);
                    this.people = response.body.results;
                });
        }
    },
    mounted() {
        this.loadPeople();
    }
});