import React, { useContext } from 'react'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
// import Button from '@mui/material/Button';
// import { FaAngleLeft } from "react-icons/fa6";
import CountryDropdown from '../CountryDropdown';

import { Button } from '@mui/material';
import { FaRegUserCircle } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';


const Header = () => {
    const context = useContext(MyContext)
  return (
    <>
        <div className="headerWrapper" >
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className='mb-0 mt-0 text-center'> 
                        Have eliminated the imposible
                    </p>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='logoWrapper d-flex align-items-center col-sm-2'>
                            <Link to={'/'}><img src={logo} alt='logo' /></Link> 
                        </div>
                        <div className='col-sm-10 d-flex align-items-center part2'>

                            {
                                context.countryList.length!==0 && <CountryDropdown/>
                            }

                            
                            <SearchBox/>
                            <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='circle mr-3'><FaRegUserCircle/></Button>
                                <div className='m1-auto cartTab d-flex align-items-center'>
                                    <span className='price'>3.0$</span>
                                    <div className='position-relative ml-2'>
                                        <Button className='circle'><BsHandbagFill/></Button>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navigation/>
            
        </div>
    </>
  )
}

export default Header