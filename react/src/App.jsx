import './App.css'
import teamLogo from './assets/teamLogo.PNG'
import Noise from './components/Noise.jsx'

function App() {

  return (     
    <div className='app-container'>
      <img 
        src={teamLogo} 
        alt='team effort logo'
        className='logo'
      />
      <Noise
        patternSize={500}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={25}
      />
    </div>
  )
}

export default App
