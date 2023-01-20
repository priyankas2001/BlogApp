import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
        <Header />
        <main className='App'>
            {/* Outlet represent all the children */}
            <Outlet />
        </main>
    </>
  )
}

export default Layout
 