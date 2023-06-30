import { Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import HundredTracks from './pages/100_tracks'
import DayPlaylist from './pages/day_playlist'
import Indy from './pages/indy'
import MyTracks from './pages/my_tracks'
import RegistrationForm from './pages/registration_form'
import ProtectedRoute from './components/protected-route'
import EnterForm from './pages/enter_form'
import NotFoundPage from './pages/not_found'

export default function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/" element={<EnterForm />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/main" element={<Main />} />
        <Route path="/day_playlist/:id" element={<DayPlaylist />} />
        <Route path="/100_tracks/:id" element={<HundredTracks />} />
        <Route path="/indy/:id" element={<Indy />} />
        <Route path="/my_tracks/:id" element={<MyTracks />} />
      </Route>
    <Route path="*" element={<NotFoundPage />} /> 
    </Routes>
  )
}
