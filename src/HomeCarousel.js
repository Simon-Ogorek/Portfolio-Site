import { useEffect, useState } from "react";
import "./HomeCarousel.css"
function HomeCarousel()
{
    const images = [
        "/Images/HomeCarousel/image1.jpg",
        "/Images/HomeCarousel/image2.jpg",
        "/Images/HomeCarousel/image3.jpg",
        "/Images/HomeCarousel/image4.jpg",
        "/Images/HomeCarousel/image5.jpg"
    ]

    const [{ index, direction }, setState] = useState({
        index: 0,
        direction: -1
    })

    function Scroll()
    {   
        setState(carousel => {
            if (carousel.index === images.length-1 || carousel.index === 0)
            {
                carousel.direction *= -1;
            }
            carousel.index += carousel.direction;

            return {
                index: carousel.index,
                direction: carousel.direction
            }
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {Scroll()}, 8000);

        return() => clearInterval(interval);
    })

    return (
        <div className="carousel-container">
            <div className="carousel-track"
            style={{
                transform: `translateX(-${index * 100}%)`,
            }}>

                { images.map((src, index) => (
                    <img className="carousel-content"
                    src={src}
                    key={index}
                    alt=""
                    />
                ))}
            </div>
                
        </div>
    )    
}

export default HomeCarousel