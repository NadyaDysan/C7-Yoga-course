import Enter from '../components/Enter/Enter'

export default function EnterForm() {
  
  const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }

  return (
    <main style={formStyle}>
      <Enter />
    </main>
  )
}
