import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { Bank } from '../../modules/banks/domain/Bank.ts'
import { BankRepository } from '../../modules/banks/domain/BankRepository.ts'
import { getBanks } from '../../modules/banks/application/get-all/getBanks'
import { BanksResponse } from '../../modules/banks/domain/BanksResponse.ts'
import useLocalStorage from '../../hooks/useLocalStorage.ts'

interface BanksContextProps {
  banks: Bank[]
  getListOfBanks: () => Promise<void>
  loading: boolean
  setLoading: (loading: boolean) => void
}
export const BanksContext = createContext<BanksContextProps>({
  banks: [],
  getListOfBanks: () => Promise.resolve(),
  loading: false,
  setLoading: () => {}
})

export const BanksContextProvider = ({
  children,
  repository
}: PropsWithChildren<{ repository: BankRepository }>) => {
  const [banks, setBanks] = useState<Bank[]>([])
  const [data, setData] = useLocalStorage<Bank[]>('banks', banks)
  const [loading, setLoading] = useState(false)
  const getListOfBanks = async (): Promise<void> => {
    if (data && data.length > 0) {
      setBanks(data)
    } else {
      setLoading(true)
      const banks: BanksResponse = await getBanks(repository)
      setBanks(banks.data)
      setData(banks.data)
      setLoading(false)
    }
  }

  return (
    <BanksContext.Provider
      value={{ banks, getListOfBanks, loading, setLoading }}
    >
      {children}
    </BanksContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useBanksContext = () => useContext(BanksContext)
