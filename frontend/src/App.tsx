/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { sampleProducts } from './data'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <header>
      </header>
      <main>
        <ul>
             {
              sampleProducts.map((product) => {
                return (
                <li key={product.slug}>
                  <img src={product.image} alt={product.name} className="product-image"></img>
                    <h2>{product.name}</h2>
                    <p>₹{product.price}</p>
                </li>)
              })
            }
            </ul>
      </main>
      <footer>
      </footer>
    </div>
    </>
  )
}

export default App
