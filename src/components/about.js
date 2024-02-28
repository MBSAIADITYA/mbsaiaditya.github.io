export default function About() {
    return (
        <main className="flex flex-col w-full">
            {/* <section className="bg-[#faf3fd] py-3 flex gap-5 items-center justify-center bg-no-repeat">
                <span>IET</span> <span>CodeBuddy</span>
            </section> */}
            <section className="bg-[#280c33] bg-[url('/bg.png')] bg-cover h-full p-12">
                <div className="flex flex-col items-center justify-center mt-2">
                    <h1 className=" text-white flex items-center gap-3 text-3xl font-bold"><span className="bg-[white] w-8 h-1 block">{" "}</span> ABOUT US<span className="bg-[white] w-8 h-1 block">{" "}</span></h1>
                    <p className="text-white text-center text-xl mt-2">We are a team of passionate programmers who believe in building a better world for everyone.</p>
                </div>
                <div className="flex flex-col items-center m-auto mt-10 max-w-6xl gap-11 ">
                    <div className="flex flex-col items-center bg-[#5c1670] rounded-lg shadow-xl sm:flex-row hover:bg-[#481457] w-full">
                        <div className=" w-full sm:w-1/2 overflow-hidden">
                            <img className="object-cover rounded-t-lg h-auto md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse items-center bg-[#5c1670] rounded-lg shadow-xl sm:flex-row l hover:bg-[#481457] w-full">
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                         <div className="w-full sm:w-1/2 overflow-hidden">
                            <img className="object-cover rounded-t-lg h-auto md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}