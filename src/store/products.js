
import { defineStore } from 'pinia'
import { $axios } from '@/plugins/axios';

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        suggestions: [],
        relateds: [],
        currentProd: {},
    }),

    getters: {
        getProducts(state) {
            return state.products
        },
        getSuggestions(state) {
            return state.suggestions
        },
        getRelateds(state) {
            return state.relateds
        },
        getProductById(state) {
            return state.currentProd
        },

    },
    actions: {
        async fetchProducts() {
            try {
                const data = await $axios.get(`products`)
                this.products = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },

        async fetchSuggestions() {
            try {
                const data = await $axios.get(`/suggestions`)
                this.suggestions = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },

        async fetchRelateds() {
            try {
                const data = await $axios.get(`/related`)
                this.relateds = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },

        async fetchProdById(id) {
            try {
                const data = await $axios.get(`/products?id=${id}`)
                this.currentProd = data.data[0]
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },

        async addFav(id, change) {
            try {
                const data = await $axios.patch(`/products/${id}`, { isFavorite: change }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(data)
                if (this.currentProd) this.currentProd.isFavorite = change
                this.fetchProducts();
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
})