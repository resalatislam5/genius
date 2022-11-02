import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img,title,price,_id} = service;
    console.log(service)
    return (
        <div className="card w-96 border shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="card-actions flex justify-between mt-4">
                <p className='font-bold text-xl text-[#FF3811]'>Price: ${price}</p>
                <Link to={`/service/${_id}`}></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;