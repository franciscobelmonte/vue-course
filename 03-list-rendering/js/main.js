const vm = new Vue({
    el: 'main',
    data: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        tasks: [
            { name: 'Gym', priority: 'Low' },
            { name: 'Learn Vue', priority: 'High' },
            { name: 'Supermarket', priority: 'Low' }
        ],
        person: {
            name: 'Francisco',
            profession: 'dev',
            city: 'Valencia'
        }
    }
});