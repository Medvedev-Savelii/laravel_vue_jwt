<template>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="fruit in fruits">
                <td>{{fruit.id}}</td>
                <td>{{fruit.name}}</td>
                <td>{{fruit.price}}</td>
            </tr>
            </tbody>
        </table>
</template>

<script>
import axios from "axios";

export default {
    name: "Index",
    data() {
        return {
            fruits: null,
        }
    },
    mounted() {
        this.getFruits();
    },
    methods: {
        getFruits() 
        {
            axios.get('/api/fruits')
                .then(res => {
                    this.fruits = res.data.data
            })
        }
    }
}
</script>

<style scoped>

</style>
