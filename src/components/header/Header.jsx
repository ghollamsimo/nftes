import React from 'react'
import './header.css'
import { Form, Button } from 'react-bootstrap'
const Header = () => {
  return (
    <header className='container header__container'>
    <article className='head__container'>
        <h1>Popular Pro Stack Nft</h1>
        <small>High quality NFT whith worry-free licensig <span className='small__span'> for personal and commercial use</span></small>
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search Items,Cllections,and Accounts"
            className="me-2"
            aria-label="Search"
            
          />
          <Button className='button__' variant="outline-dark">Search</Button>
        </Form>
        <ul className='link'>
          <li><a href="#">Latest</a></li>
          <li><a href="#">Popular</a></li>
          <li className='linke'>|</li>
          <li><a href="#"><span className='premium__freee'>Premium</span></a></li>
          <li><a href="#"><span className='premium__free'>Free</span></a></li>
        </ul>
        <h2 className='h2__'>Popular NFT</h2>
    </article>
  </header>
  )
}

export default Header