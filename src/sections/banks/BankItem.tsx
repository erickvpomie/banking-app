import { FC } from 'react'
import { Bank } from '../../modules/banks/domain/Bank.ts'
import useHover from '../../hooks/useHover.ts'

const BankItem: FC<Bank> = ({ bankName, description, age, url }) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()
  return (
    <div
      className='w-full h-44 rounded-2xl bg-space-grey-dark relative overflow-hidden px-10 text-moonlit flex items-center'
      ref={hoverRef}
    >
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-bold text-white z-[2] mb-2'>{bankName}</h2>
        <p className='text-white z-[2]'>{description}</p>
        <p className='text-white z-[2]'>
          En méxico desde: {2024 - age} ({age} años)
        </p>
      </div>
      <div className='w-48 h-full max-h-full object-cover absolute top-0 right-0 sm:w-72 bg-gradient-to-r from-space-grey-dark to-transparent z-[1]' />
      <img
        className={`w-48 h-full max-h-full object-cover opacity-40 absolute top-0 right-0 sm:w-72 z-0 transition-opacity duration-300 ${isHovered && 'opacity-80'}`}
        src={url}
        alt={bankName}
      />
    </div>
  )
}

export default BankItem
