import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../App';
import logo1 from "../../assets/images/logo1.png"
import gg from "../../assets/images/gg.png"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

const SignIn = () => {

    const context = useContext(MyContext);

    useEffect( () => {
        context.setIsHeaderFooterShow(false);
    }, []);
  return (
    <section className='section signInPage'>
      <div className='shape-bottom'>

      </div>
      <div className='container'>
          <div className='box card p-3 shadow border-0'>
            <div className='text-center' >
              <img src={logo1} alt="" style={{ width: '100px'}}/>
            </div>

            

            <form className='mt-3'>
              <h2 className='mb-4'>ĐĂNG NHẬP</h2>
              <div className='form-group'>
                <TextField id="standard-basic" label="Email" type='email' required variant="standard"  className='w-100'/>
              </div>
              <div className='form-group'>
                <TextField id="standard-basic" label="Mật khẩu" type='Password' required  variant="standard" className='w-100' />
              </div>


              <a className='border-effect cursor txt' >Quên mật khẩu?</a>

              <div className='d-flex align-items-center mt-3 mb-3'>
                <Button className="btn-blue btn-lg  btn-big col-8">Đăng nhập</Button>
                <Link to="/"><Button className="btn-lg btn-big col ml-3" 
                  variant="outlined"                  
                  onClick={ () => context.setIsHeaderFooterShow(true)}>
                    
                    Hủy bỏ
                  
                </Button></Link>

              </div>

              <p className='txt'>Chưa có tài Khoản? <Link to="/signUp" className="border-effect">Đăng kí</Link></p>

              <h6 className='mt-4 text-center font-weight-bold '>Hoặc tiếp tục bằng</h6>

              <Button className='loginWithGoogle mt-2' variant='outlined'><img src={gg} alt="" /> Sign In With Google</Button>

            </form>


          </div>
      </div>
    </section>
  )
}

export default SignIn