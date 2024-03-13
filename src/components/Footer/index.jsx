import s from './Footer.module.css';
import {useState} from "react";

const Footer = () => {
    const [links] = useState([
        {
            "link": "mailto:examplegallery@gmail.com",
            "text": "email: examplegallery@gmail.com"
        }, {
            "link": "mailto:workgallery@gmail.com",
            "text": "work offers: workgallery@gmail.com"
        }, {
            "link": "mailto:officegallery@gmail.com",
            "text": "contact office: officegallery@gmail.com"
        },{
            "link": "",
            "text": "Instagram"
        }, {
            "link": "",
            "text": "Facebook"
        }, {
            "link": "",
            "text": "Twitter"
        }, {
            "link": "",
            "text": "Privacy and cookies policy"
        }, {
            "link": "",
            "text": "Regulations"
        }, {
            "link": "",
            "text": "I want to set cookies."
        }
    ])
    return (
        <footer>
            <div className={s.links}>
                {links.slice(0, 3).map(el => (
                    <a href={el.link}>{el.text}</a>
                ))}
            </div>
            <div className={s.links}>
                {links.slice(3, 6).map(el => (
                    <a href={el.link}>{el.text}</a>
                ))}
            </div>
            <div className={s.links}>
                {links.slice(6, 9).map(el => (
                    <a href={el.link}>{el.text}</a>
                ))}
            </div>
        </footer>
    )
}

export default Footer;