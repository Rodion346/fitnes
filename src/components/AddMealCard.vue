<template>
  <v-card class="pa-5" color="surface">
    <v-card-title class="text-h6">Добавление питания</v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="meal in meals" :key="meal.type" cols="12" sm="6">
          <v-card class="pa-3" color="card-background" outlined>
            <v-row align="center" justify="space-between">
              <v-col cols="8">
                <div class="text-h6">{{ meal.type }}</div>
              </v-col>
              <v-col cols="4" class="d-flex justify-end">
                <div class="icon-container">
                  <v-btn @click="handleAction(meal.type, 'add')" icon class="icon-button">
                    <div class="icon-background add-icon"></div>
                  </v-btn>
                  <v-btn @click="handleAction(meal.type, 'voice')" icon class="icon-button">
                    <div class="icon-background voice-icon"></div>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      meals: [
        { type: 'Добавить'},
      ],
    };
  },
  methods: {
    handleAction(mealType, action) {
      if (action === 'add') {
        console.log(`Добавление ${mealType} вручную`);
      } else if (action === 'voice') {
        console.log(`Добавление ${mealType} голосом`);
      }
    },
  },
};
</script>

<style scoped>
.icon-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.icon-button {
  padding: 0;
}
.icon-background {
  width: 24px; /* Размер иконок */
  height: 24px;
  background-size: cover;
}
.add-icon {
  background-image: url('@/assets/plus.ico');
}
.voice-icon {
  background-image: url('@/assets/micro.ico');
}
</style>
