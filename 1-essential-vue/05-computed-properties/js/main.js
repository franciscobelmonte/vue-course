const vm = new Vue({
    el: 'main',
    data: {
        message: 'Hello world!',
        tasks: [
            { name: 'Gym', priority: true },
            { name: 'Learn Vue', priority: false },
            { name: 'Supermarket', priority: true }
        ],
    },
    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('')
        },
        priorityTasks() {
            return this.tasks.filter((task) => task.priority);
        }
    }
});