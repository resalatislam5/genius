import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className='grid grid-cols-2 py-32'>
            <div className="relative w-[600px]">
            <img src={person} alt="" className='w-[460px] h-[480px] rounded-lg' />
            <img src={parts} alt="" className='h-[330px] absolute top-1/2 left-1/3 w-96 border-8 border-white rounded-lg'/>
            </div>
            <div className="">
                <h6 className='text-xl font-bold text-[#FF3811] mb-5'>About Us</h6>
                <h2 className="text-5xl font-bold text-black mb-7">We are qualified <br /> & of experience <br /> in this field</h2>
                <p className="text-lg text-[#737373] mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="text-lg text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <Link to = '/' className="btn  bg-[#FF3811] hover:bg-[#ca2200] text-white hover:text-white hover:border-none border-[#FF3811] mt-5">Appointment</Link>
            </div>

        </div>
    );
};

export default About;