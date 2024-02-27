import ReactCanvasNest from 'react-canvas-nest';
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <>
            <main className=" flex justify-center items-center min-h-[50vh] sm:min-h-[80vh] mt-14 sm:mt-0 bg-white flex-col">
                {/* <ReactCanvasNest className='canvasNest' config={{ pointColor: ' 86, 12, 125 ', count: 111 }} style={{ zIndex: 99 }} /> */}
                <div className="flex items-center sm:justify-between w-full px-10 flex-col-reverse sm:flex-row">
                    <div className="flex flex-col flex-auto w-full sm:w-1/2 justify-center">
                        <h1 className="text-black text-4xl md:text-5xl font-bold">Your potential.<br /> Our passion.<br />
                        </h1>
                        <h1 className=' text-[#631c6f] text-4xl md:text-5xl font-bold mb-4'>
                            <Typewriter
                                options={{
                                    strings: ["Engineering to inspire.", "Exploring innovation.", "Designing to ideate.", "Digitally serving."],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <h2 className=" text-2xl text-[#484848] mb-12 ">We are a team of motivated students pledged to promote technological growth accross the globe.
                        </h2>
                    </div>
                    <div className="hidden sm:flex flex-col w-1/2 justify-center">
                        <img src="/iet-logo.png" alt="iet-logo" className="h-auto mb-4" />
                    </div>
                </div>
            </main>
        </>
    )
}