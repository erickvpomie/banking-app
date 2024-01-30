import NavBar from '../../components/NavBar.tsx'
import { useBanksContext } from '../../sections/banks/BanksContext.tsx'
import { useEffect } from 'react'

const HomePage = () => {
  const { getListOfBanks } = useBanksContext()

  useEffect(() => {
    getListOfBanks().catch(console.error)
  }, [])

  return (
    <div className=''>
      <NavBar />
    </div>
  )
}

export default HomePage
