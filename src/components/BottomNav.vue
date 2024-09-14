<template>
    <v-bottom-navigation v-model="active" color="primary" grow>
      <v-btn :to="{ name: 'Diary' }" exact>
        <span>Дневник</span>
      </v-btn>
      <v-btn :to="{ name: 'Profile' }" exact>
        <span>Профиль</span>
      </v-btn>
      <v-btn :to="{ name: 'Pro' }" exact>
        <span>PRO</span>
      </v-btn>
    </v-bottom-navigation>
  </template>
  
  <script>
  export default {
    data() {
      return {
        active: null
      };
    }
  };
  </script>
  