<template>
    <Header v-if="auth.is_authenticated"></Header>
    <div id="section-body">
        <NavigationComponentVue v-if="auth.is_authenticated"/>
        <router-view class="section-router"></router-view>
    </div>
    <div id="section-player" v-if="auth.is_authenticated">
        <AudioPlayer/>
    </div>
</template>

<script>
import { auth } from './stores/auth';
import NavigationComponent from './components/NavigationComponent.vue';

export default {
    components: {NavigationComponent},
    name: "App",
    data() {
        return {
            auth
        };
    },
};
</script>