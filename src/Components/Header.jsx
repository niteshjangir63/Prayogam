import { useEffect, useState } from 'react'
import './Header.css'
export default function Header() {

    const [images, setImages] = useState(["https://media.istockphoto.com/photos/indian-farmer-at-onion-field-picture-id1092520698?b=1&k=20&m=1092520698&s=170667a&w=0&h=KZRymW0MAZWHVp-rOCrSirQIoDwlfLi_W2LwlNVrVkE="]);

    const [count, setCount] = useState(0);


    useEffect(() => {


       
        const interval = setInterval(() => {

            setCount(prev => (prev + 1) % images.length)

        }, 5000)

        return () => clearInterval(interval)

    }, [images.length])


    return (
<>

            <h1>{count}</h1>
            {
                images ? <div className="HeaderSlider">
            <img src={images[count]} alt="" /> 
            

        </div> :<h1>Loading...</h1> }
            
        
        </>
    )
}