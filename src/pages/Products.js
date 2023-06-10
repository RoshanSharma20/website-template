import { Card } from 'flowbite-react'
import React from 'react'
import pic from "../img/740051.jpg"

function Products() {
    return (
        <>
            <center>
                <div className='w-11/12 pt-20'>
                    <h1 className='text-5xl pb-2'>Products</h1>
                    <div className='flex flex-row text-xl'>
                        <div className='basis-2/12'>
                            <h1 className='text-2xl'>Filters</h1>
                            <div className='flex items-stretch'>
                                <div>
                                    <div className='text-md my-1'>filter by price</div>
                                    <div className='text-md my-1'>filter by category</div>
                                    <div className='text-md my-1'>filter by rating</div>
                                    <div className='text-md my-1'>filter by choice</div>
                                </div>
                            </div>
                        </div>
                        <div className='basis-10/12'>
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
                    </div>
                </div>
            </center>
        </>
    )
}
export default Products
