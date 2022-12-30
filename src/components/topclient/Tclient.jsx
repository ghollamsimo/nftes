import React from 'react'
import './tclient.css'
import {BiArrowToBottom} from 'react-icons/bi'
import {FaEthereum} from 'react-icons/fa'
import {TbBrandAirbnb} from 'react-icons/tb'
import {GiDragonShield} from 'react-icons/gi'
import {TbLetterO} from 'react-icons/tb'
import {MdVerified} from 'react-icons/md'
import NFTBOX from '../../assets/Nft-box.jpg'
import NFTBOX2 from '../../assets/Nft-box2.jpg'
import NFTBOX3 from '../../assets/Nft-box3.jpg'
import NFTBOX4 from '../../assets/Nft-box4.jpg'
import NFTBOX5 from '../../assets/Nft-box5.jpg'
import NFTBOX6 from '../../assets/Nft-box6.jpg'
import NFTBOX7 from '../../assets/Nft-box7.jpg'


const Tclient = () => {
  return (
    <div className='top__container'>
        <div className='top__container-row'>
            <h3>Trending</h3>
            <h3>Top</h3>
            <p className='time'>24h <BiArrowToBottom/></p>
            <div className='all__chaine'>
                <h4>All chains</h4>
                <i><FaEthereum/></i>
                <i><TbBrandAirbnb/></i>
                <i><GiDragonShield/></i>
                <i><TbLetterO/></i>
            </div>
        </div>
    <hr />
        <div className='tclient__container'>
            <div className='tclient__container-card'>
                <h2>1</h2>
                <img src={NFTBOX2} alt=""width={100} />
                <h5>Lost miners of the Ether <i><MdVerified/></i></h5>
                <div className='tclient__container-price'>
                    <h4>0.33 ETH</h4>
                    <h4>139 ETH</h4>
                </div>
            </div>

            <div className='tclient__container-card'>
                <h2>2</h2>
                <img src={NFTBOX} alt=""width={100} />
                <h5>RTFKT X NIKE MONOLITH <i></i></h5>
                <div className='tclient__container-price'>
                    <h4>0.25 ETH</h4>
                    <h4>38 ETH</h4>
                </div>
            </div>

            <div className='tclient__container-card'>
                <h2>3</h2>
                <img src={NFTBOX3} alt=""width={100} />
                <h5>ENS:Ethereum Service <i><MdVerified/></i></h5>
                <div className='tclient__container-price'>
                    <h4>0.14 ETH</h4>
                    <h4>82 ETH</h4>
                </div>
            </div>

            <div className='tclient__container-card'>
                <h2>4</h2>
                <img src={NFTBOX4} alt=""width={100} />
                <h5>Vandalism By </h5>
                <div className='tclient__container-price'>
                    <h4>0.02 ETH</h4>
                    <h4>36 ETH</h4>
                </div>
            </div>

            <div className='tclient__container-card'>
                <h2>5</h2>
                <img src={NFTBOX5} alt=""width={100} />
                <h5>Reflection by anon <i><MdVerified/></i></h5>
                <div className='tclient__container-price'>
                    <h4>0.30 ETH</h4>
                    <h4>139 ETH</h4>
                </div>
            </div>

            <div className='tclient__container-card'>
                <h2>6</h2>
                <img src={NFTBOX6} alt=""width={100} height={50}/>
                <h5>The Memes by 6529 <i><MdVerified/></i></h5>
                <div className='tclient__container-price'>
                    <h4>0.07 ETH</h4>
                    <h4>139 ETH</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tclient