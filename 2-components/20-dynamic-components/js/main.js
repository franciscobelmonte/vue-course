Vue.component('tasks-listing', {
    template: `<div>
                <h1><slot></slot></h1>
                <ul>
                    <task v-for="task in tasks" v-bind:task="task"></task>
                </ul>
                <hr>
            </div>`,
    data() {
        return {
            tasks: [
                'Running',
                'Learn Vue.js',
                'Gym',
                'Read a book',
            ],
        }
    }
});

Vue.component('task', {
    props: ['task'],
    template: `<li> {{ task }}</li>`
});

Vue.component('contact', {
    template: `<div><a href="mailto:fbelmonte@email.com">fbelmonte@email.com</a> <hr></div>`,
});

Vue.component('bio', {
    template: `<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet magna quis maximus. Vivamus eget consectetur tellus. Sed diam ante, dictum sit amet tincidunt ac, facilisis eget dui. </p><hr></div>`,
});

new Vue({
    el: 'main',
    data: {
        selected: 'tasks-listing'
    }
});