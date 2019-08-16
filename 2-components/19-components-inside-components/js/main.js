Vue.component('tasks-listing', {
    props: ['tasks'],
    template: `
        <div>
            <h1><slot></slot></h1>
            <ul>
                <task v-for="task in tasks" v-bind:task="task"></task>
            </ul>
        </div>`
});

Vue.component('task', {
    props: ['task'],
    template: `<li>{{task}}</li>`
});


new Vue({
    el: 'main',
    data: {
        tasks: [
            'Running',
            'Learn Vue.js',
            'Gym',
            'Read a book',
        ]
    }
});