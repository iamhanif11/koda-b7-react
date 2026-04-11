import Nav from './Navbar.jsx'

function HeaderV2() {
  return (
    <header className="bg-white h-16 flex  items-center justify-between rounded-2xl p-4">
        <div className='text-lg text-blue-600 font-medium'>
            Minitask
        </div>
       
        <div>
        <Nav/>

        </div>

        
    </header>
  )
}

export default HeaderV2