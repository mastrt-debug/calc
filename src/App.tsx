import logo from './assets/logo.png'
import './App.css'
import { Calculator } from './Calculator'
function App() {

  return (
    <>
      <header>
        <img className='logo' src={logo} alt='logo'></img>
      </header>
      <main>
        <h1>Калькулятор</h1>
        <hr></hr>
        <Calculator />
      </main>
    </>
  )
}

export default App
