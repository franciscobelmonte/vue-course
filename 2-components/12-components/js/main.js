Vue.component('todos', {
    template: `
        <ul>
            <li v-for="task in tasks">{{task.title}}</li>
        </ul>
    `,
    props: ['tasks']
});

const vm = new Vue({
    el: 'main',
    data: {
        tasks: []
    },
    methods: {
        loadTodos() {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then((response) => {
                    console.log(response);
                    this.tasks = response.data;
                });
        }
    },
    mounted() {
        this.loadTodos();
    }
});