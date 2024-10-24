<template>
    <div>
        <h1>Login</h1>
       <form @submit.prevent="handlesubmit">
        <input type="email" placeholder="Ingrese Email" v-model.trim="email">
        <input type="password" placeholder="Ingre Contraseña" v-model.trim="password">
        <button type="submit">Acceso</button>
       </form>
    </div>
</template>

<script  setup>
import { ref } from 'vue';
import {useUserStore}from'../stores/user.js'
// import {useRouter}from 'vue-router'
const userStore= useUserStore();

// const router= useRouter();

const email= ref('ejemplo@gmail.com');
const password= ref('12345678');
const handlesubmit= async()=>{
   if(!email.value || password.value.length < 6){
    return alert('LLene los campos')
   }
    await userStore.loginUser(email.value, password.value)
    // router.push('/')
}
</script>

