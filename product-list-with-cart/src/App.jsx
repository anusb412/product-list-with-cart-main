import addCartBtn from './assets/images/icon-add-to-cart.svg'
import waffle from './assets/images/image-waffle-mobile.jpg'
import vanillaBean from './assets/images/image-creme-brulee-mobile.jpg'
import macaron from './assets/images/image-macaron-mobile.jpg'
import tiramisu from './assets/images/image-tiramisu-mobile.jpg'
import baklava from './assets/images/image-baklava-mobile.jpg'
import lemonMeringue from './assets/images/image-meringue-mobile.jpg'
import redVelvet from './assets/images/image-cake-mobile.jpg'
import brownie from './assets/images/image-brownie-mobile.jpg'
import pannaCotta from './assets/images/image-panna-cotta-mobile.jpg'
import { useState } from 'react'

function App() {

  const [buttonText, setButtonText] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleClick = () => {
    const button = document.querySelector('button');
    button.textContent = '';
    button.style.backgroundColor = "hsl(14, 86%, 42%)";
  }


  return (
    <>
      <h1>Desserts</h1>
      <div className="waffle item">
        <img src={waffle} alt="" className='product'/>
        <button onClick={handleClick}>{buttonText} <img src={addCartBtn} alt="" />Add to Cart</button>
        <p className='type'>Waffle</p>
        <p className='title'>Waffle  with Berries</p>
        <p className='price'>$6.50</p>
      </div>

      <div className="vanilla-bean item">
        <img src={vanillaBean} alt="" className='product'/>
        <button> <img src={addCartBtn} alt="" />Add to Cart</button>
        <p className='title'>Vanilla Bean Creme Brulee</p>
        <p className='type'>Creme Brulee</p>
        <p className='price'>$7.00</p>
      </div>

      <div className="macaron item">
        <img src={macaron} alt="" className='product'/>
        <button> <img src={addCartBtn} alt="" />Add to Cart</button>
        <p className='title'>Macaron Mix of Five</p>
        <p className='type'>Macaron</p>
        <p className='price'>$8.00</p>
      </div>

      <div className="tiramisu item">
        <img src={tiramisu} alt="" className='product'/>
        <button> <img src={addCartBtn} alt="" />Add to Cart</button>
        <p className='title'>Classic Tiramisu</p>
        <p className='type'>Tiramisu</p>
        <p className='price'>$5.50</p>
      </div>

      <div className="baklava item">
        <img src={baklava} alt="" className='product'/>
        <button> <img src={addCartBtn} alt="" />Add to Cart</button>
        <p className='title'>Pistachio Baklava</p>
        <p className='type'>Baklava</p>
        <p className='price'>$4.00</p>
      </div>

      <div className="lemon-meringue-pie item">
        <img src={lemonMeringue} alt="" className='product'/>
        <button> <img src={addCartBtn} alt="" />Add to Cart</button>
        <p className='title'>Lemon Meringue Pie</p>
        <p className='type'>Pie</p>
        <p className='price'>$5.00</p>
      </div>

      <div className="red-velvet-cake item">
        <img src={redVelvet} alt="" className='product'/>
        <button> <img src={addCartBtn} alt="" />Add to Cart</button>
        <p className='title'>Red Velvet Cake</p>
        <p className='type'>Cake</p>
        <p className='price'>$4.50</p>
      </div>

      <div className="salted-caramel-brownie item">
        <img src={brownie} alt="" className='product'/>
        <button> <img src={addCartBtn} alt="" />Add to Cart</button>
        <p className='title'>Salted Caramel Brownie</p>
        <p className='type'>Brownie</p>
        <p className='price'>$4.50</p>
      </div>

      <div className="panna-cotta item">
        <img src={pannaCotta} alt="" className='product'/>
        <button> <img src={addCartBtn} alt="" />Add to Cart</button>
        <p className='title'>Vanilla Panna Cotta</p>
        <p className='type'>Panna Cotta</p>
        <p className='price'>$6.50</p>
      </div>

      <div className="cart">
        <h3>Your Cart(0)</h3>
        <img src="" alt="" />
        <p className='cart-text'>Your added items will appear here</p>
      </div>

    </>
  )
}

export default App
