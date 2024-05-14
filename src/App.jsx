import './App.css'
import Navbar from './components/navbar'
import Card from './components/card'
import data from './data'

function App() {
  const cards = data.map(data => <Card key={data.id} {...data}></Card>)
  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}

export default App
