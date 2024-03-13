import s from './About.module.css';
import {useState} from "react";
import Teamuser from "./Teamuser";

const About = () => {
    const [team] = useState([
        {img: "https://cdn-icons-png.flaticon.com/512/149/149071.png", alt: "team user", profile: "Admin", name: "User Name", link:"https://neckitwin.github.io/"},
        {img: "https://cdn-icons-png.flaticon.com/512/149/149071.png", alt: "team-user", profile: "Admin", name: "User Name", link:"https://neckitwin.github.io/"},
        {img: "https://cdn-icons-png.flaticon.com/512/149/149071.png", alt: "team-user", profile: "Admin", name: "User Name", link:"https://neckitwin.github.io/"},
        {img: "https://cdn-icons-png.flaticon.com/512/149/149071.png", alt: "team-user", profile: "Admin", name: "User Name", link:"https://neckitwin.github.io/"},
        {img: "https://cdn-icons-png.flaticon.com/512/149/149071.png", alt: "team-user", profile: "Admin", name: "User Name", link:"https://neckitwin.github.io/"}
    ])
    return (
        <div className={s.about}>
            <h2>About our gallery</h2>
            <p>Our gallery is the best place to buy and sell art. We have a wide range of paintings, sculptures, and other art pieces. We also have a team of experts who can help you with any questions you may have. We are open 24/7, so you can visit us at any time. We are looking forward to seeing you!</p>
            <h3>Our team</h3>
            <p>Our team is made up of art lovers who are passionate about what they do. We are always here to help you with any questions you may have. We are dedicated to providing the best service to our customers, and we are always looking for ways to improve. We are looking forward to seeing you!</p>
            <div className={s.team__members}>
                {team.map(el => (
                    <Teamuser img={el.img} alt={el.alt} profile={el.profile} name={el.name} link={el.link} />
                ))}
            </div>
            <h3>Our history</h3>
            <p>Our gallery has been around for over 50 years. We have a long history of providing the best service to our customers. We are always looking for ways to improve, and we are dedicated to providing the best service to our customers. We are looking forward to seeing you!</p>
        </div>
    )
}

export default About;