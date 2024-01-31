import ReactDOM from 'react-dom/client'
import HomePage from './pages/home'
import './styles/index.css'
import { createBanksRepository } from './modules/banks/infra/BanksRepository.ts'
import { BanksContextProvider } from './sections/banks/BanksContext.tsx'

const repository = createBanksRepository()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BanksContextProvider repository={repository}>
    <HomePage />
  </BanksContextProvider>
)
