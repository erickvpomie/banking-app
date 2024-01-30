import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { Bank } from '../../modules/banks/domain/Bank.ts'
import { BankRepository } from '../../modules/banks/domain/BankRepository.ts'
import { getBanks } from '../../modules/banks/application/get-all/getBanks'

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

  const getListOfBanks = async () => {
    const banks = await getBanks(repository)
    console.log(banks)
    setBanks(banks)
  }

  return (
    <BanksContext.Provider value={{ banks, getListOfBanks }}>
      {children}
    </BanksContext.Provider>
  )
}

export const useBanksContext = () => useContext(BanksContext)
