import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import LoadingError from './components/Error-loading/Error_loading'
import Main from './pages/main'
import Collections from './pages/collections'
import MyTracks from './pages/my_tracks'
import RegistrationForm from './pages/registration_form'
import ProtectedRoute from './components/protected-route'
import NotFoundPage from './pages/not_found'
import Logout from './pages/logout'


export default function AppRoutes() {

  return (
    <ErrorBoundary FallbackComponent={LoadingError} onReset={() => window.location.reload(false)}>
    <Routes>
      <Route path="/login" element={<RegistrationForm />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<ProtectedRoute redirectPath="/login" />}>
        <Route path="/" element={<Main />} />
        <Route path="/collection/:id" element={<Collections />} />
        <Route path="/my_tracks" element={<MyTracks />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Route>
    <Route path="*" element={<RegistrationForm />} /> 
    </Routes>
    </ErrorBoundary>
  )
}
