<template>
  <v-app>
    <v-main>
      <router-view></router-view>  <!-- Здесь будут рендериться компоненты -->
    </v-main>
    <BottomNav />  <!-- Ваш компонент нижней навигации -->
  </v-app>
</template>

<script>
import BottomNav from './components/BottomNav.vue';

export default {
  components: {
    BottomNav,
  },
};
</script>
