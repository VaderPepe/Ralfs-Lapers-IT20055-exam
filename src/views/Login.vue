<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" placeholder="E-mail" v-model="email" type="Email"/>
            <input id="input-password" placeholder="Password" v-model="password" type="Password"/>
            <button id="btn-submit" type="submit" :disabled="notAllowed" @click="auth.authenticate(email, password)">LOGIN</button>
        </form>
    </div>
</template>

<script>
import { auth } from '../stores/auth.js';
//import NavigationComponent from './components/NavigationComponent.vue';

export default {
    name: "Login-Page",
    data() {
        return {
            email : '',
            password : '',
            auth
        };
    },
    computed: {
        notAllowed() {
            return this.email.length <5 || this.password.length <6;
        }
    }

};
</script>