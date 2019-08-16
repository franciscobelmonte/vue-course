Vue.component('alert', {
    props: ['type', 'position'],
    template: `
            <section class="alert" :class="[type, position]">
                <header class="alert__header">
                        <slot name="header">Header</slot>
                </header>
                <div class="alert__content">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dui justo, at molestie orci dapibus
                            vitae.
                        </slot>
                </div>
                <footer class="alert__footer">
                        <slot name="footer">Footer</slot>
                </footer>
            </section>`,
});

new Vue({
    el: 'main',
});