<template lang="">
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/" class="nav-link">
            <img src="../assets/logo.png" alt="logo" style="width:40px;">
        </router-link>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/users" class="nav-link">Users</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/dynemic" class="nav-link">Dynemic Component</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/slot" class="nav-link">Slot</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <router-view />
</div>
</template>

<script>
export default {

}
</script>

<style lang="">

</style>
