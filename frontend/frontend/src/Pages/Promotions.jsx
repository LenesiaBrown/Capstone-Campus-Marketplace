import React, { useState, setShowDropdown, useEffect} from 'react';
import banner from '../Components/Assets/Banner2.png';
import welcome from '../Components/Assets/welcome2.png';

const Promotions = () => {
    
    const [imageIndex, setImageIndex] = useState(0);
    const images = [banner, welcome];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % images.length);
        },3000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className='home'>
            <div className="homeslide">
            <br></br><br></br><br></br>
            <img  src={images[imageIndex]} alt="Banner" className='slideshow'/>
            </div>
            <div className="home-recommends">
                <br></br><br></br><br></br>
            </div>

        </div>
    )
}

export default Promotions
