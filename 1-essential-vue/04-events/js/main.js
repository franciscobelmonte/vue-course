const vm = new Vue({
    el: 'main',
    data: {
        newTask: null,
        tasks: ['Gym', 'Learn Vue', 'Supermarket']
    },
    methods: {
        addTaskWithVue() {
            this.tasks.push(this.newTask);
            this.newTask = null;
        }
    }
});

// Vanilla Javascript
function addTask() {
    const input = document.querySelector('input[type=text]');
    vm.tasks.push(input.value);
    input.value = '';
}