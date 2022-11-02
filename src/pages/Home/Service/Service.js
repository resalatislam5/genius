import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center my-20">
            <h6 className='text-xl font-bold text-[#FF3811] mb-5'>About Us</h6>
            <h2 className="text-5xl font-bold text-black mb-7">Our Service Area</h2>
             <p className="text-lg text-[#737373] mb-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 '>
                {
                    services.map(service => <ServiceCard key={service._id} service ={service} />)
                }
            </div>
        </div>
    );
};

export default Service;