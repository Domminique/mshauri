import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, ProtectedRoute } from './pages'
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
} from './pages/dashboard'
//import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from './components/InfoSection/Data'

import { Footer, QandA } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        {/* <Route path='/QandA' element={<QandA />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
    
      <Footer />
    </BrowserRouter>
  )
}

export default App
