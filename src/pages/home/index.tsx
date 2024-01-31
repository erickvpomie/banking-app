import NavBar from '../../components/NavBar.tsx'
import { useBanksContext } from '../../sections/banks/BanksContext.tsx'
import { useEffect } from 'react'
import BankList from '../../sections/banks/BankList.tsx'

const HomePage = () => {
  const { banks, getListOfBanks } = useBanksContext()

  useEffect(() => {
    getListOfBanks().catch(console.error)
  }, [])

  return (
    <div className='w-full overflow-x-hidden'>
      <NavBar />
      <div className='w-full flex flex-col items-center'>
        <main className='w-full max-w-6xl flex flex-col mt-24 px-5 overflow-x-hidden'>
          <div className='w-full py-14 text-center sm:text-left'>
            <h1 className='text-4xl font-bold text-moonlit'>Bancos</h1>
            <p className='text-moonlit'>Listado de bancos en México</p>
          </div>
          <BankList banks={banks} />
        </main>
      </div>
    </div>
  )
}

export default HomePage
