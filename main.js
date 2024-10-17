var app = new Vue({
    el: '#app',
    data: {
        brand: 'Fancy',
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        link: 'https://example.com/more-info',
        selectedVariant: 0,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender Neutral"],
        sizes: ['Small', 'Medium', 'Large'],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "../assets/images/socks_green.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "../assets/images/socks_blue.jpg",
                variantQuantity: 0
            }
        ],
        cart: 0,
        reviews: [],  // To store the reviews
        name: '',
        review: '',
        rating: null,
        recommend: null  // New field for recommendation
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        addReview() {
            if (this.name && this.review && this.rating && this.recommend !== null) {
                let newReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend === "yes" ? "Yes" : "No"
                };
                this.reviews.push(newReview);
                // Clear the form inputs
                this.name = '';
                this.review = '';
                this.rating = null;
                this.recommend = null;
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' Socks'
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity > 0
        },
        saleMessage() {
            if (this.onSale) {
                return `${this.brand} ${this.product} is on sale for 7 days only! Get it Now to save your money!`;
            }
            return '';
        }
    }
});
