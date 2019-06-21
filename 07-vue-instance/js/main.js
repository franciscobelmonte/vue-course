const vm = new Vue({
    el: 'main',
    data: {
        message: 'Hello World!'
    },
    beforeUpdate() {
        console.log('Before updated', this.message);
    },
    updated() {
        console.log('Updated', this.message);
    }
});