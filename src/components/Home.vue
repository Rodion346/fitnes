<template>
    <v-container>
      <v-row>
        <!-- Картинка профиля -->
        <v-col cols="12" sm="4" class="d-flex justify-center">
          <v-card class="profile-card" width="200" height="200" tile @click="goToProfile">
            <v-img
              src='@/assets/profile.jpg'
              class="profile-photo"
              contain
            ></v-img>
          </v-card>
        </v-col>
  
        <!-- График недельной статистики -->
        <v-col cols="12" sm="8">
          <v-card class="pa-5">
            <v-card-title class="text-h6">Недельная статистика по калориям</v-card-title>
            <v-card-text>
              <!-- Используйте библиотеку для графиков, например Chart.js -->
              <canvas id="weekly-chart"></canvas>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Home',
    setup() {
      const router = useRouter();
  
      // Navigate to profile page
      function goToProfile() {
        router.push({ name: 'Profile' });
      }
  
      onMounted(() => {
        Chart.register(...registerables);
  
        new Chart(document.getElementById('weekly-chart'), {
          type: 'line',
          data: {
            labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            datasets: [{
              label: 'Калории',
              data: [1200, 1400, 1300, 1500, 1600, 1400, 1300],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `${context.dataset.label}: ${context.raw} ккал`;
                  }
                }
              }
            }
          }
        });
      });
  
      return {
        goToProfile,
      };
    }
  };
  </script>
  
  <style scoped>
  .profile-card {
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
  
  .profile-photo {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  </style>
  