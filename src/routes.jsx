import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import LoadingError from './components/Error-loading/Error_loading'
import Main from './pages/main'
import HundredTracks from './pages/100_tracks'
import DayPlaylist from './pages/day_playlist'
import Indy from './pages/indy'
import MyTracks from './pages/my_tracks'
import RegistrationForm from './pages/registration_form'
import ProtectedRoute from './components/protected-route'
import NotFoundPage from './pages/not_found'
import Logout from './pages/logout'


export default function AppRoutes({ isAuth }) {

  return (
    <ErrorBoundary FallbackComponent={LoadingError} onReset={() => window.location.reload(false)}>
    <Routes>
      <Route path="/login" element={<RegistrationForm />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}>
        <Route path="/" element={<Main />} />
        <Route path="/day_playlist/:id" element={<DayPlaylist />} />
        <Route path="/100_tracks/:id" element={<HundredTracks />} />
        <Route path="/indy/:id" element={<Indy />} />
        <Route path="/my_tracks/:id" element={<MyTracks />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Route>
    <Route path="*" element={<RegistrationForm />} /> 
    </Routes>
    </ErrorBoundary>
  )
}
