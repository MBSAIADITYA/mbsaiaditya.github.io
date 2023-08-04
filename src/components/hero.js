import ReactCanvasNest from 'react-canvas-nest';

export default function Hero() {
    return (
        <>
            <main className=" flex justify-center items-center min-h-[86vh] bg-white flex-col">
            <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 86, 12, 125 ', count:111 }} style = {{ zIndex: 99 }} />
                <div className="flex justify-between w-full px-10">
                    <div className="flex flex-col flex-auto w-1/2 justify-center">
                        <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">Your potential.<br /> Our passion.<br />
                            {/* <a className="typewrite" data-period="2000" data-type="[ &quot;Engineering to inspire.&quot;, &quot;Exploring innovation.&quot;, &quot;Designing to ideate.&quot;, &quot;Digitally serving.&quot; ]"><span className="wrap"></span></a> */}
                        </h1>
                        <h2 className=" text-2xl text-[#484848] mb-12 ">We are a team of motivated students pledged to promote technological growth accross the globe.
                        </h2>
                    </div>
                    <div className="flex flex-col w-1/2 justify-center">
                        <img src="/iet-logo.png" alt="iet-logo" className="h-auto mb-4" />
                    </div>
                </div>
            </main>
        </>
    )
}