<template>
    <auth-layout>
        <div id="auth">
            <div class="container ">
                <h1>Login to Application</h1>

                <form @submit.prevent="login" class="mb-5">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>

                <div>
                    Don't have an account? <router-link :to="{name: 'register'}">Register</router-link>
                </div>

            </div>
        </div>
    </auth-layout>
</template>

<script>

import AuthLayout from '@/renderer/layouts/AuthLayout.vue'
export default {
    components: {
        AuthLayout
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },

    methods: {
        login() {
            window.ipcRenderer.send('go-app');
            console.log(this.email,this.password)
        }
    }
}
</script>

<style lang="scss">
   @import './style.scss';
</style>