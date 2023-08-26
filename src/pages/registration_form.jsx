import Registration from '../components/Registration/Registration'
import ErrorList from '../components/ErrorList/Error-list'
import { addError } from '../redux/features/authSlice'

export default function RegistrationForm() {
  
  const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
  return (
    <main style={formStyle}>
      <Registration />
      <ErrorList reducer={addError} />
    </main>
  )
}
