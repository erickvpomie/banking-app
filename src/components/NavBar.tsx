import { ArrowUpRight } from 'lucide-react'

const NavBar = () => {
  return (
    <div className='w-full h-16 flex items-center justify-center fixed bg-space-black bg-opacity-70 backdrop-blur-lg z-10'>
      <header className='w-full h-full max-w-6xl flex items-center justify-between px-5'>
        <div className='text-lg font-medium'>Bancos de México</div>
        <a
          href='https://erickvpomie.vercel.app/'
          target='_blank'
          title='Portfolio'
          aria-label='Portfolio'
          className='cursor-pointer bg-space-blue text-space-light px-5 py-2 font-medium text-center rounded-3xl flex items-center gap-2 text-sm active:scale-[1.05] transition-transform duration-300'
          rel='noreferrer'
        >
          <span>Portafolio</span>
          <ArrowUpRight name='arrow-up-right' size='20' />
        </a>
      </header>
    </div>
  )
}

export default NavBar
