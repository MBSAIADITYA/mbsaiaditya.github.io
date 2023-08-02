import { Carousel } from 'flowbite-react';

export default function Events() {
    return (
        <main className="bg-[#fdf7fe] p-12">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl flex gap-3 items-center font-bold text-[#222222]"><span className="bg-[#631c6f] w-8 h-1 block">{" "}</span>EVENTS & WORKSHOP<span className="bg-[#631c6f] w-8 h-1 block">{" "}</span></h1>
                <p className="mt-3"> IET-VIT conducts sessions targeted towards the development of STEM knowledge among the youth.</p>
            </div>
            <div className='w-[450px] h-[350px] m-auto mt-10'>
                <Carousel
                    slideInterval={5000}
                    leftControl=" "
                    rightControl=" "
                >
                    <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    />
                    <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1690669249460-65a76daaf698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1094&q=80"
                    />
                    <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                </Carousel>
            </div>

        </main>
    )
}