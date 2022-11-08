import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/BigSidebar'

const BigSidebar = () => {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            {/* <Logo /> */}
            <h4>
            emed<span>Africa</span>
          </h4>
            {/* <h4>emedafrica</h4> */}
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
