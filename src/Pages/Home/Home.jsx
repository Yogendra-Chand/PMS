import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

function Home() {
  return (
    <>
    <Navbar/>
 
    <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="Product Image" />
        
        <div className="card-content">
            <div className="product-name">Product Name</div>
            <div className="product-description">
                This is a short description of the product. It explains the key details and what makes it useful.
            </div>
        </div>
    </div>
    </>
  )
}

export default Home