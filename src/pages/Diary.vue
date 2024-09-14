<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <Home />
        <v-card class="pa-5">
          <v-card-title class="text-h6">Статистика</v-card-title>
          
          <!-- Круговая диаграмма для калорий -->
          <v-card-text class="text-center">
            <v-progress-circular
              :value="(calories.current / calories.total) * 100"
              :model-value="(calories.current / calories.total) * 100"
              size="150"
              width="15"
              color="primary"
              rotate="-90"
            >
              <div>{{ calories.current }} / {{ calories.total }} ккал</div>
            </v-progress-circular>
          </v-card-text>

          <!-- Шкалы для БЖУ -->
          <v-card-text>
            <v-card-subtitle>Белки: {{ protein.current }} / {{ protein.total }} г</v-card-subtitle>
            <v-progress-linear
              :value="(protein.current / protein.total) * 100"
              :model-value="(protein.current / protein.total) * 100"
              height="15"
              color="primary"
              rounded
            ></v-progress-linear>

            <v-card-subtitle>Жиры: {{ fat.current }} / {{ fat.total }} г</v-card-subtitle>
            <v-progress-linear
              :value="(fat.current / fat.total) * 100"
              :model-value="(fat.current / fat.total) * 100"
              height="15"
              color="primary"
              rounded
            ></v-progress-linear>

            <v-card-subtitle>Углеводы: {{ carbs.current }} / {{ carbs.total }} г</v-card-subtitle>
            <v-progress-linear
              :value="(carbs.current / carbs.total) * 100"
              :model-value="(carbs.current / carbs.total) * 100"
              height="15"
              color="primary"
              rounded
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- Добавление питания голосом -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" sm="6">
        <AddMealCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddMealCard from '../components/AddMealCard.vue';
import Home from '../components/Home.vue';

export default {
  components: {
    Home,
    AddMealCard,
  },
  data() {
    return {
      calories: {
        current: 1200,
        total: 2000,
      },
      protein: {
        current: 60,
        total: 100,
      },
      fat: {
        current: 40,
        total: 70,
      },
      carbs: {
        current: 200,
        total: 250,
      },
    };
  },
};
</script>

<style scoped>
.v-card {
  background-color: var(--card-background);
  color: var(--text-color);
}
.v-progress-circular > div {
  font-size: 18px;
  color: var(--text-color);
}
.v-progress-linear {
  margin-bottom: 8px; /* Отступ между шкалами */
}
</style>

