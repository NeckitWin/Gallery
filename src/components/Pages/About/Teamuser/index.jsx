import s from './Teamuser.module.css';

const Teamuser = (props) => {
    return (
        <a href={props.link} className={s.team__member} target="_blank" rel="noreferrer">
            <h3>{props.profile}</h3>
            <img src={props.img} alt={props.alt}/>
            <p>{props.name}</p>
        </a>
    )
}

export default Teamuser;