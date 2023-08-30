import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Main = ({ children }) => {
  return (
    <div> 
      <Navbar />
      <Outlet />
      <Footer />
    </div>
        
    
  )
}

export default Main