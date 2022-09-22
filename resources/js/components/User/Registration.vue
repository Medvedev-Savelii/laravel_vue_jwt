<template>
    <div>
        <div class="w-25 " >
            <input v-model="name" type="text" class="form-control mt-3 mb-2" placeholder="Enter your name...">
            <input v-model="email" type="email" class="form-control mb-2" placeholder="Enter your email...">
            <input v-model="password" type="password" class="form-control mb-2" placeholder="Enter your password...">
            <input v-model="password_confirmation" type="password" class="form-control mb-2" placeholder="Enter your password...">
            <input @click.prevent="store" type="submit" class="btn btn-success" value="Enter">
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Registration",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },
    methods: {
       store() {
           axios.post('/api/users',{
               name: this.name,
               email: this.email,
               password: this.password,
               password_confirmation: this.password_confirmation
           }).then(res => {
               console.log(res);
           }).catch(error => console.error(error))
       }
    }

}

</script>

<style scoped>

</style>
