<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card outlined class="my-4">
            <v-card-title>Профиль</v-card-title>
            <v-card-text>
              <v-avatar size="120">
                <img src="https://via.placeholder.com/150" alt="Profile Photo" />
              </v-avatar>
              <v-text-field label="Имя" v-model="name"></v-text-field>
              <v-text-field label="Email" v-model="email"></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "Иван Иванов",
        email: "ivan@example.com",
      };
    }
  };
  </script>
  