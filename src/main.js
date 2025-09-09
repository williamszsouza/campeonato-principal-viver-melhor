import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

// Importa só o Bootstrap puro
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)
app.mount('#app')

console.log('Vue app carregou', app)
