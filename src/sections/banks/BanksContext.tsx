import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { Bank } from '../../modules/banks/domain/Bank.ts'
import { BankRepository } from '../../modules/banks/domain/BankRepository.ts'
import { getBanks } from '../../modules/banks/application/get-all/getBanks'
import { BanksResponse } from '../../modules/banks/domain/BanksResponse.ts'
import useLocalStorage from '../../hooks/useLocalStorage.ts'

interface BanksContextProps {
  banks: Bank[]
  getListOfBanks: () => Promise<void>
}
export const BanksContext = createContext<BanksContextProps>({
  banks: [],
  getListOfBanks: () => Promise.resolve()
})

export const BanksContextProvider = ({
  children,
  repository
}: PropsWithChildren<{ repository: BankRepository }>) => {
  const [banks, setBanks] = useState<Bank[]>([])
  const [data, setData] = useLocalStorage<Bank[]>('banks', banks)
  const getListOfBanks = async (): Promise<void> => {
    if (data && data.length > 0) {
      setBanks(data)
    } else {
      const banks: BanksResponse = await getBanks(repository)
      setBanks(banks.data)
      setData(banks.data)
    }
  }

  return (
    <BanksContext.Provider value={{ banks, getListOfBanks }}>
      {children}
    </BanksContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useBanksContext = () => useContext(BanksContext)
