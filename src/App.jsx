import './App.css'
import Card from './Card'
import EmojiBar from './EmojiBar'

function App() {
  const brands = [
    'Rolls-Royce', 'BMW', 'Mercedes-Benz', 'Audi', 'Skoda',
    'Toyota', 'Honda', 'Ferrari', 'Lamborghini', 'Porsche',
    'Tesla', 'Ford', 'Chevrolet', 'Jaguar', 'Land Rover'
  ]

  const cars = brands.map((b) => ({
    title: b,
    description: `${b} — dynamic performance on track and road.`,
    image: `https://source.unsplash.com/1000x800/?race,car,${encodeURIComponent(b)}`
  }))

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Car Card</h1>
      <p style={{textAlign: 'center'}}>A CSS-only style inspired layout with image backgrounds.</p>

      <EmojiBar />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
        padding: 24,
      }}>
        {cars.map((car) => (
          <Card key={car.title} title={car.title} description={car.description} image={car.image} />
        ))}
      </div>
    </>
  )
}

export default App
