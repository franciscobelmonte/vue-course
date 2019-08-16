Vue.component('alert', {
    props: ['type', 'position'],
    template: `
            <section class="alert" :class="[type, position]">
                <header class="alert__header">
                        <a href="#" @click="hideAlert">Close</a>
                        <slot name="header">Header</slot>
                </header>
                <div class="alert__contenido">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dui justo, at molestie orci dapibus
                            vitae.
                        </slot>
                </div>
                <footer class="alert__footer">
                        <slot name="footer">Footer</slot>
                </footer>
            </section>`,
    methods: {
        hideAlert() {
            this.$emit('hide');
        }
    }
});

new Vue({
    el: 'main',
    data: {
        showSuccess: false,
        showError: false,
        showWarning: false,
    }
});