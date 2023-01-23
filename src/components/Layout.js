import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
        <Header />
        <main className='App'>
          <div className='container'>
              {/* Outlet represent all the children */}
              <Outlet />
          </div>
        </main>
    </>
  )
}

export default Layout
 