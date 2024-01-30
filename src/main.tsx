import ReactDOM from 'react-dom/client'
import HomePage from './pages/home'
import './styles/index.css'
import { createApiBanksRepository } from './modules/banks/infra/ApiBanksRepository.ts'
import { BanksContextProvider } from './sections/banks/BanksContext.tsx'

const repository = createApiBanksRepository()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BanksContextProvider repository={repository}>
    <HomePage />
  </BanksContextProvider>
)
