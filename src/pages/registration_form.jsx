import Registration from '../components/Registration/Registration'

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
    </main>
  )
}
