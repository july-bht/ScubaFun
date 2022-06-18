import React from 'react'
import { AiFillYoutube, AiFillFacebook } from 'react-icons/ai';
import { BsMouse } from 'react-icons/bs';

const Home = () => {


    const scrollToNextSection = () => {
        const nextPage = document.getElementById('nextSection');
        nextPage.scrollIntoView({ behavior: 'smooth' });
    }



    return (
        <section>
            <div className='h-screen bg-black w-screen flex justify-center'>
                <div className='absolute '>
                    <div className=' w-screen relative h-screen '>
                        <div className='mb-32 absolute bottom-0 left-0'>
                            <div className='y-line'></div>
                            <a target="_blank" href="/"> <AiFillYoutube className='y-icon' /></a>
                            <a target="_blank" href="/">  <AiFillFacebook className='y-icon' /></a>
                            <div className='y-line'></div>
                        </div>

                        <div className='absolute bottom-0 right-0'>
                            <div className='y-line'></div>
                            <div onClick={scrollToNextSection}><BsMouse className='y-icon animate-bounce ' /></div>

                            <div className='y-line'></div>
                        </div>
                    </div>

                </div>

                <div className='my-auto text-center '>
                    <h1 className='text-6xl font-bold text-white '>Djursland <br />
                        under <span className='text-primary'>overfladen</span></h1>
                    <br />
                    <p className='w-1/2 mx-auto'>Djursland rummer mange unikke naturoplevelser både over og under vandet. Er du certificeret dykker har du mulighed for at deltage i vores mange guidede ture på forskellige destinationer rund omkring Djursland. </p>
                </div>
            </div>

            <div className='h-screen' id="nextSection">

            </div>
        </section>
    )
}

export default Home