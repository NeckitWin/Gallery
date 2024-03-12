import s from "./Gallery.module.css";
import {useState} from "react";
import images from "./images";

const Gallery = () => {

    const [active, setActive] = useState(null);
    const handleClick = (index) => {
        active !== index ? setActive(index) : setActive(null);
    }
    return (
        <div className={s.gallery}>
            {images.map((el, index) => (
                <img key={el.alt}
                     onClick={() => handleClick(index)}
                     className={`${s.img} ${index === active ? s.active : ""}`}
                     src={el.img}
                     alt={el.alt}/>
            ))}
        </div>
    )
}

export default Gallery;