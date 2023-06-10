import React from 'react'
import pic from "../img/740051.jpg"
import pic1 from "../img/pic1.jpg"
import { Carousel } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TbTruckDelivery } from "react-icons/tb"
import { MdDiscount } from "react-icons/md"
import { RiCustomerService2Fill } from "react-icons/ri"

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper';
import { Card } from 'flowbite-react';

function Homepage() {
    const lang = [{ name: "mens", color: "red" }, { name: "womens", color: "pink" }, { name: "kids", color: "green" }, { name: "summer", color: "orange" }, { name: "winter", color: "blue" }];
    return (
        <>
            <center>
                <div className='pt-20 w-5/6 bg-gray-500'>
                    <Carousel autoplay draggable autoplaySpeed={6000} effect="fade" pauseOnHover={false}>
                        <div>
                            <img
                                alt="..."
                                src={pic}
                                className="h-auto max-w-6xl rounded-lg shadow-xl dark:shadow-gray-800"
                            />
                        </div>
                        <div >
                            <img
                                alt="..."
                                src={pic1}
                                className="h-auto max-w-6xl rounded-lg shadow-xl dark:shadow-gray-800"
                            />
                        </div>
                        <div>
                            <img
                                alt="..."
                                src={pic}
                                className="h-auto max-w-6xl rounded-lg shadow-xl dark:shadow-gray-800"
                            />
                        </div>
                    </Carousel>
                </div>
                <div className='w-5/6 pt-20'>
                    <h1 className='text-5xl pb-10'>Shop By Category</h1>

                    {lang.length > 0 && <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 240 }
                        }}
                        loop={true}
                        centeredSlides={true}
                        speed={800}
                        autoplay={{ delay: 3000, }}
                        modules={[Autoplay]}
                    >
                        {lang.map((Lang, i) => (
                            <div>
                                <SwiperSlide key={i}>
                                    <div className={"py-28 bg-" + Lang.color + "-400 rounded-full text-3xl"}>
                                        <h1 className='test-3xl'>{Lang.name}</h1>
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>}
                </div >
                <div className='w-5/6 pt-20'>
                    <h1 className='text-5xl pb-10'>Products</h1>
                    <div className='flex justify-evenly'>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                    </div>
                    <div className='flex justify-evenly pt-6'>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                    </div>
                </div>
                <div className='w-5/6 pt-20'>
                    <h1 className='text-5xl pb-8'>New Arrivals</h1>
                    <div className='flex justify-evenly'>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                    </div>
                </div>
                <div className='w-5/6 pt-20'>
                    <h1 className='text-5xl pb-8'>Best Sellers</h1>
                    <div className='flex justify-evenly'>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={pic} className='mx-2'
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Dress Name
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Price
                                </p>
                            </p>
                        </Card>
                    </div>
                </div>
                <div className='w-5/6 pt-20'>
                    <h1 className='text-5xl'>Why Choose Us</h1>
                    <div className='flex justify-evenly pt-10'>
                        <div>
                            <h1 className='text-9xl pb-4'><TbTruckDelivery></TbTruckDelivery></h1>
                            <p className='text-xl'>Quick Delivery</p>
                        </div>
                        <div>
                            <h1 className='text-9xl pb-4'><MdDiscount></MdDiscount></h1>
                            <p className='text-xl'>Great Discounts</p>
                        </div>
                        <div>
                            <h1 className='text-9xl pb-4'><RiCustomerService2Fill></RiCustomerService2Fill></h1>
                            <p className='text-xl'>Customer Service</p>
                        </div>
                    </div>
                </div>
            </center >
        </>
    )
}
export default Homepage