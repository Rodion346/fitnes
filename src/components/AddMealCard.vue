<template>
    <v-card class="pa-5" color="surface">
      <v-card-title class="text-h6">Добавление питания</v-card-title>
      <v-card-text>
        <v-row justify="center">
          <v-col cols="12" sm="3">
            <v-btn @click="addMeal('breakfast')" color="primary" block>
              Завтрак
            </v-btn>
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn @click="addMeal('lunch')" color="primary" block>
              Обед
            </v-btn>
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn @click="addMeal('dinner')" color="primary" block>
              Ужин
            </v-btn>
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn @click="addMeal('snack')" color="primary" block>
              Перекус
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    methods: {
      addMeal(mealType) {
        // Логика для добавления питания голосом
        console.log(`Добавление ${mealType}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    background-color: var(--card-background);
    color: var(--text-color);
  }
  </style>
  