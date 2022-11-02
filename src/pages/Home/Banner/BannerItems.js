import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const BannerItems = ({slider}) => {
    const {image,id, next,pre} = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img">
        <img src={image} alt='' className="w-full" />
        </div>
        <div className="absolute  justify-end transform -translate-y-1/2 left-20 top-1/2 text-white">
          <h1 className='text-6xl font-bold'>
          Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className='font-semibold text-lg my-5'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
          <Link to = '/' className="btn bg-transparent hover:bg-[#FF3811] hover:text-white hover:border-none text-[#FF3811] border-[#FF3811] mr-5">Discover More</Link>
          <Link to = '/' className="btn bg-transparent hover:bg-[#FF3811] hover:text-white hover:border-none text-[#FF3811] border-[#FF3811]">Latest Project</Link>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${pre}`} className="btn btn-circle mr-5">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle bg-[#FF3811] border-0">❯</a>
        </div>
      </div> 
    );
};

export default BannerItems;