Vue.component('my-tasks', {
    props: ['tasks'],
    template: '#tasks-template'
});

new Vue({
    el: 'main',
    data: {
        tasks: [
            { title: 'Running' },
            { title: 'Learn Vue.js' },
            { title: 'Gym' },
            { title: 'Read a book' },
        ]
    }
});