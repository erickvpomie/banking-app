const NavBar = () => {
  return (
    <div className='w-full h-16 flex items-center justify-center fixed bg-space-light bg-opacity-70 backdrop-blur-lg z-10'>
      <header className='w-full h-full max-w-6xl flex items-center justify-between px-5'>
        <div className='text-lg font-medium'>Bancos de México</div>
        <div className='bg-space-blue text-space-light px-5 py-2 font-medium'>
          Portafolio
        </div>
      </header>
    </div>
  )
}

export default NavBar
