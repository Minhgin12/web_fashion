import { Rating } from '@mui/material';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import React, { useContext, useRef, useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityBox from '../QuantityBox/QuantityBox';
import { FaRegHeart } from "react-icons/fa";
import { MyContext } from '../../App';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductModal = (props) => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);


    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }


  return (
    <>
        <Dialog className='productModal' open={context.isOpenProductModal} onClose={ () => context.setIsOpenProductModal(false)}>
           
            <Button className='close_' onClick={() => 
                context.setIsOpenProductModal(false)}><IoCloseCircleOutline/>
            </Button>

            <h4 className='mb-1 font-weight-bold'>tooi laf thang </h4>
            <div className='d-flex align-items-center mr-4'>
                <div className='d-flex align-items-center'>
                    <span><b>bugv</b></span>
                    <span className='ml-2'>vgv</span>
                </div>

                <Rating name='read-only' value={5} size="small" precision={0.5} readOnly />
                
            </div>
            <hr/>

            <div className='row mt-2 productDetailModal'>
                <div className='col-md-5'>
                    <div className='productZoom position-relative'>
                        <div className='badge badge-primary'>23%</div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={false}
                            slidesPerGroup={1}
                            modules={[Navigation]}
                            className="zoomSliderBig"
                            ref={zoomSliderBig}
                        >
                            <SwiperSlide>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        // src={`$imgUrl?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                                        src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/11/05/abec4fd34ab3098de98428fc9705077e.webp" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        // src={`$imgUrl?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                                        src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/11/05/abec4fd34ab3098de98428fc9705077e.webp" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        // src={`$imgUrl?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                                        src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/11/05/abec4fd34ab3098de98428fc9705077e.webp" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        // src={`$imgUrl?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                                        src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/11/05/abec4fd34ab3098de98428fc9705077e.webp" />
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>


                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="zoomSlider"
                        ref={zoomSlider}
                    >
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                                <img  src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/11/05/abec4fd34ab3098de98428fc9705077e.webp" 
                                className='w-100' onClick={() => goto(0)}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                                <img  src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/11/05/abec4fd34ab3098de98428fc9705077e.webp" 
                                className='w-100' onClick={() => goto(0)}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                                <img  src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/11/05/abec4fd34ab3098de98428fc9705077e.webp" 
                                className='w-100' onClick={() => goto(0)}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                                <img  src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/11/05/abec4fd34ab3098de98428fc9705077e.webp" 
                                className='w-100' onClick={() => goto(0)}/>
                            </div>
                        </SwiperSlide>
                    </Swiper>   
                    
                </div>
                <div className='col-md-7'>
                    <div className='d-flex info align-items-center'>
                        <span className='oldPrice lg mr-2'>9.10</span>
                        <span className='netPrice text-danger lg'>9.10</span>
                    </div>

                    <span className='badge bg-success mt-2'>In stock</span>

                    <p className='mt-2'> Day la san pham duoc phat trien boi cogn ty hang dau ve thoi trang </p>

                    <div className='d-flex align-items-center'>
                        <QuantityBox/>

                        <Button className='btn-blue btn-lg btn-big btn-round'>Add to cart</Button>
                    </div>


                    <div className='d-flex align-items-center mt-3 actions'>
                        <Button className='btn-round btn-sml' variant="outlined"><FaRegHeart/> &nbsp; ADD TO WISHLIST</Button>
                    </div>
                    


                </div>
            </div>
            
        </Dialog>
    </>
  )
}

export default ProductModal