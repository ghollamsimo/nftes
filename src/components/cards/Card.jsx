import React from 'react'
import './card.css'
import { Row,  Col, Button, Modal} from 'react-bootstrap'
import IMG1 from '../../assets/Nft1.png'
import IMG2 from '../../assets/Nft2.jpg'
import IMG3 from '../../assets/Nft3.jpg'
import IMG4 from '../../assets/Nft4.jpg'
import IMG5 from '../../assets/Nft5.jpg'
import IMG6 from '../../assets/Nft6.jpg'
import IMG7 from '../../assets/Nft7.jpg'
import IMG8 from '../../assets/Nft8.jpg'
import IMG9 from '../../assets/Nft9.jpg'
import IMG10 from '../../assets/Nft10.jpg'
import IMG11 from '../../assets/Nft11.jpg'
import IMG12 from '../../assets/Nft12.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {

  

  const notify = () => toast.success('Add to card', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;
  
  
  return (
    <section className='card__container'>
  
<div className='card__body'>
  <a onClick={notify} > 
  <ToastContainer />
   <img src={IMG1} alt="Card image" width={250}/>
    <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>1.5 ETH</h6>
    </a>
</div>

<div className='card__body'>
  <a onClick={notify}>
   <img src={IMG2} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>1 ETH</h6>
    </a>
</div>

<div className='card__body'>
  <a onClick={notify}>
   <img src={IMG3} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>0.05 ETH</h6>
    </a>
</div>

<div className='card__body'>
   <img src={IMG4} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>2.0 ETH</h6>
   
</div>

<div className='card__body'>
   <img src={IMG5} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>0.90 ETH</h6>
   
</div>

<div className='card__body'>
   <img src={IMG6} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>5 ETH</h6>
   
</div>

<div className='card__body'>
   <img src={IMG7} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>0.7 ETH</h6>
   
</div>

<div className='card__body'>
   <img src={IMG8} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>1.5 ETH</h6>
   
</div>

<div className='card__body'>
   <img src={IMG9} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>2.2 ETH</h6>
</div>

<div className='card__body'>
  <a onClick={notify}>
   <img src={IMG10} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>2.5 ETH</h6>
    </a>
</div>

<div className='card__body'>
  <a onClick={notify}>
   <img src={IMG11} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>1.9 ETH</h6>
    </a>
</div>

<div className='card__body'>
  <a onClick={notify}>
   <img src={IMG12} alt="Card image" width={250}/>
     <h4>NFT Monkey</h4>
    <h5>NFT</h5>
    <small>Best NFT</small>
    <h6>0.009 ETH</h6>
    </a>
</div>
</section>
  )
}

export default Card