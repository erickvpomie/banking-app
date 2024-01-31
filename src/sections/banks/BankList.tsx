import { FC } from 'react'
import { Bank } from '../../modules/banks/domain/Bank.ts'
import BankItem from './BankItem.tsx'

interface BankListProps {
  banks: Bank[]
}

const BankList: FC<BankListProps> = ({ banks }) => {
  return (
    <div className='w-full flex flex-col gap-4'>
      {banks.map(bank => (
        <BankItem {...bank} />
      ))}
    </div>
  )
}

export default BankList
