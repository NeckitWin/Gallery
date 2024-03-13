import s from './Sellart.module.css';
import Formsell from "./Formsell";

const Sellart = () => {
    return (
        <div className={s.sell}>
            <h2>Fill out the form to put your image up for sale</h2>
            <Formsell />
        </div>
    )
}

export default Sellart;