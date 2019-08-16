const vm = new Vue({
    el: 'main',
    data: {
        tasks: [
            { title: 'Gym', finished: false },
            { title: 'Learn Vue', finished: false },
            { title: 'Supermarket', finished: true }
        ],
    },
    methods: {
        finishTask(task) {
            task.finished = !task.finished;
        }
    },
    computed: {
        finishedTasks() {
            return this.tasks.filter(task => task.finished);
        }
    }
});