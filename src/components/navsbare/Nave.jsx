import {useState}  from 'react'
import './nave.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from '../../assets/Nft_logo.png'
import META from '../../assets/metamask.png'
import COIN from '../../assets/coinbase.png'
import WALLET from '../../assets/WalletConnect.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {AiOutlinePartition} from 'react-icons/ai'
import {GiArtilleryShell} from 'react-icons/gi'
import {BsFillCollectionFill} from 'react-icons/bs'
import {MdDomain} from 'react-icons/md'
import {AiFillCamera} from 'react-icons/ai'
import {FaWallet} from 'react-icons/fa'
import {MdSpaceDashboard} from 'react-icons/md'
import {BiWorld} from 'react-icons/bi'
import {FaShoppingCart} from 'react-icons/fa'
import {VscAccount} from 'react-icons/vsc'


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Button className='sign_up-button' onClick={handleShow} > <i><VscAccount/></i> </Button>
      <Offcanvas  className="offcanvas__container" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title className='offcanvas__container-title'>Connect your Wallet</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='offcanvas__container-body'>
        <p>If you don't have a wallet, you can select a provider and create one now. <a href="#">Learn more</a> </p>
        <hr />
        <div className='wallet__container'>
          <div className='wallet'>
        <img src={META} alt="" width={50}/>
        <a href="Meta"> <h4>MetaMask</h4></a>
        </div>

        <div className='wallet'>
        <img src={COIN} alt="" width={50}/>
        <h4>Coinbase</h4>
        </div>

        <div className='wallet'>
        <img src={WALLET} alt="" width={50}/>
        <h4>WalletConnect</h4>
        </div>

        
        </div>
         <div className='offcanvas__container-body-button'>
            <button className='offcanvas__container-body-btn'>Show more</button>
         </div>
       
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Nave = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <Navbar  collapseOnSelect expand="lg" bg="#10101a" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><img src={LOGO} alt="Logo" width={50}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Stats</Nav.Link>
          <Nav.Link href="#features">Resources</Nav.Link>
          <Nav.Link href="#pricing">Drops</Nav.Link>
          <NavDropdown menuVariant="dark" title="Explore" id="hover-nav-dropdown" >
            
            <NavDropdown.Item href="#/3.1"><AiOutlinePartition/> All NFTS</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#/3.2"> <GiArtilleryShell/> Art </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#/3.3"><BsFillCollectionFill/> Collectibles</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#/3.4">
             <MdDomain/> Domain Names
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#/3.5"><AiFillCamera/> Photography</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#/3.6"><FaWallet/> Utility </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#/3.7"><MdSpaceDashboard/> Trading Card</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#/3.8"><BiWorld/>Virtual Worlds</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#Card"><a  onClick={handleShow} className="submit"><FaShoppingCart/></a></Nav.Link>
            {/* SATRT MODAL */}
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal__title'>Your Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Card is empty</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Shop 
          </Button>
        </Modal.Footer>
      </Modal>
      {/* END MODAL */}
          <Nav.Link eventKey={2} >
          {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Nave