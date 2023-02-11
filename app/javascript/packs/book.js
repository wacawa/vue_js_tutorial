import { Vue } from 'vue/dist/vue.esm-bundler.js';
import { createApp } from 'vue';
import axios from 'axios';
import App from '../App.vue'

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  app.mount('#app');
});

createApp({
  data() {
    return {
      bookInfo: {},
      bookInfoBool: false
    }
  },
  methods: {
    setBookInfo(id) {
      axios.get(`http://localhost:5000/api/books/${id}.json`).then(res => {
        this.bookInfo = res.data;
        this.bookInfoBool = true;
      })
    }
  }
}).mount('.js-booksIndex')
