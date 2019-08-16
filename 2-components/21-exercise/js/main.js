Vue.component('users', {
    template: "#users-template",
    data() {
        return {
            users: [],
            search: ''
        }
    },
    mounted() {
        axios.get('https://randomuser.me/api/?results=50')
            .then((response) => {
                this.users = response.data.results.map((user) => {
                    return {
                        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
                        email: user.email,
                        picture: user.picture.medium
                    }
                })
            });
    },
    computed: {
        filteredUsers() {
            return this.users.filter((user) => user.name.includes(this.search));
        }
    }
});

Vue.component('user', {
    template: '#user-template',
    props: ['user']
});

new Vue({
    el: 'main'
});