import './App.css'
import Advice from './Advice'

// funcion that create a footer with author name and date
function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    const styles = {
        color: '#fff', 
        position: 'absolute',
        bottom: '2rem',
        width: '100%'
    }

    return (
        <footer style={styles}>
            <p>&copy; {year} - Danilo Bezerra frontendmentor challenge solution</p>
        </footer>
    )
}

function App() {
  return (
    <div className="App">
      <Advice />
      <Footer />
    </div>
  )
}

export default App
