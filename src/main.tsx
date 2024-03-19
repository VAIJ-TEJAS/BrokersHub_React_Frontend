import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { MyContextProvider } from './context/context.provider.tsx'
import App from './App.tsx'
import './index.css'

axios.defaults.baseURL = 'https://13.232.115.59'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
)
