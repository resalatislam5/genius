import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import BannerItems from './BannerItems';
const Banner = () => {
    const banners = [
        {
            image:img1,
            id: 1,
            next:2,
            pre:6
        },
        {
            image:img2,
            id: 2,
            next:3,
            pre:1
        },
        {
            image:img3,
            id: 3,
            next:4,
            pre:2
        },
        {
            image:img4,
            id: 4,
            next:5,
            pre:3
        },
        {
            image:img5,
            id: 5,
            next:6,
            pre:4
        },
        {
            image:img6,
            id: 6,
            next:1,
            pre:5
        },
    ]
    return (
        <div className="carousel w-full rounded-lg pt-10">
           {
            banners.map(slider => <BannerItems key={slider.id} slider={slider} />)
           }

</div>
    );
};

export default Banner;