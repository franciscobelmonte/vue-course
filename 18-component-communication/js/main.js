const eventBus = new Vue();

Vue.component('products-listing', {
    props: ['products'],
    template: `
        <section>
            <ul>
                <li v-for="product in products">
                    {{ product.name }} - 
                    <small>{{ product.price.toFixed(2) }} €</small>
                    <button @click="removeProduct(product.price)">-</button>
                    <button @click="addProduct(product.price)">+</button>
                </li>
            </ul>
        </section>`,
    methods: {
        addProduct(price) {
            eventBus.$emit('addToShoppingCart', price);
        },
        removeProduct(price) {
            eventBus.$emit('removeInShoppingCart', price);
        },
    }
});

Vue.component('shopping-cart', {
    template: `
        <section>
            <h1> {{ total.toFixed(2) }} € </h1>
            <h3> {{ countOfProducts }} products </h3>
        </section>`,
    data() {
        return {
            countOfProducts: 0,
            total: 0,
        }
    },
    created() {
        eventBus.$on('addToShoppingCart', (price) => {
            if (this.total >= 0) {
                this.total += price;
                this.countOfProducts++;
            }
        });
        eventBus.$on('removeInShoppingCart', (price) => {
            if (this.total > 0) {
                this.total -= price;
                this.countOfProducts--;
            }
        });
    }
});

new Vue({
    el: 'main',
    data: {
        products: [
            { name: 'Book ES6', price: 39 },
            { name: 'Laptop', price: 1300 },
            { name: 'Cofee', price: 2 },
            { name: 'Headshots', price: 80 },
            { name: 'Moleskine', price: 19 },
        ]
    }
});