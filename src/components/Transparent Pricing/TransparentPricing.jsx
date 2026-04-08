import React from 'react';

const TransparentPricing = () => {
    return (
        <div className='mx-20 my-20 '>

            <div className='mx-auto text-center'>

                <h1 className='text-5xl mb-5 font-extrabold'>Transparent Pricing</h1>
                <p className='text-[16px] text-gray-500'>Choose
                    the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            {/* 3card section */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-5 mt-6   rounded-lg bg-base-200'>

                <div className=' '>
                    <div className=" shadow shadow-amber-200  card w-full  flex flex-col flex-1 rounded-3xl
                 h-[400px] bg-base-100 shadow-sm  ">
                        <div className="card-body  ">

                            <div className="flex flex-col flex-1 ">
                                <h2 className="text-2xl font-bold mb-2">Starter</h2>
                                <p className="text-gray-500">Perfect for getting started</p>

                                <span className="my-6 text-xl font-semibold ">
                                    <span className='font-bold text-4xl'>$0</span>/month</span>
                            </div>
                            <ul className=" flex flex-col gap-2 text-xs">
                                <li>✔ Access to 10 free tools</li>
                                <li>✔ Access to all premium tools</li>
                                <li>✔ Community support</li>
                                <li>✔ Perfect for getting started</li>


                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block bg-gradient-to-r
          from-[#4F39F6] to-[#9514FA] rounded-full">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <div className="card rounded-3xl relative w-full flex flex-col flex-1 
             h-[400px] bg-base-100 shadow-sm bg-gradient-to-r
            from-[#4F39F6] to-[#9514FA]">

                            {/* Top Center Badge */}
                            <span className="text-white badge badge-warning absolute -top-3 left-1/2 transform -translate-x-1/2">
                                Most Popular
                            </span>

                            <div className="card-body ">

                                <div className="flex flex-col flex-1">
                                    <h2 className="text-2xl font-bold mb-2 text-white">Pro</h2>
                                    <p className='text-gray-500 text-white'>Best for professionals</p>

                                    <span className="my-5 text-xl font-semibold text-white">
                                        <span className='font-bold text-4xl text-white'>$29</span>/month
                                    </span>
                                </div>

                                <ul className="flex flex-col gap-2 text-xs text-white">
                                    <li>✔ Access to all premium tools</li>
                                    <li>✔ Unlimited templates</li>
                                    <li>✔ Priority support</li>
                                    <li>✔ Cloud sync</li>
                                    <li>✔ AI-driven image enhancements</li>
                                    <li>✔ Advanced analytics</li>
                                </ul>

                                <button className="btn bg-white text-blue-400 btn-block rounded-full">
                                    Start Pro Trial
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="card  w-full flex flex-col flex-1 h-[400px]
                   bg-base-100 shadow-sm rounded-3xl">

                        {/* Top Center Badge */}


                        <div className="card-body rounded-3xl">

                            <div className="flex flex-col flex-1">
                                <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
                                <p className='text-gray-500'>For teams and businesses</p>

                                <span className="my-5 text-xl font-semibold">
                                    <span className='font-bold text-4xl'>$99</span>/month
                                </span>
                            </div>

                            <ul className="flex flex-col gap-2 text-xs">
                                <li>✔ Access to all premium tools</li>
                                <li>✔ Unlimited templates</li>
                                <li>✔ Priority support</li>
                                <li>✔ Cloud sync</li>
                                <li>✔ AI-driven image enhancements</li>
                                <li>✔ Advanced analytics</li>
                            </ul>

                            <button className="btn  text-white bg-gradient-to-r
          from-[#4F39F6] to-[#9514FA] rounded-full btn-block rounded-full">
                                Contact Sales
                            </button>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TransparentPricing;