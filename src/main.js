import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import './assets/style/global.css'; // Импорт глобальных стилей

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',  // Устанавливаем тёмную тему по умолчанию
    themes: {
      dark: {
        colors: {
          background: '#121212',  // Цвет фона
          surface: '#1E1E1E',  // Цвет поверхностей (карточек, кнопок)
          primary: '#BB86FC',  // Фиолетовый для выделения
          secondary: '#03DAC6',  // Бирюзовый для второстепенных элементов
          accent: '#03A9F4',  // Синий акцент
        },
      },
    },
  },
});

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app');
