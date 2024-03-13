import s from './Formsell.module.css';

const Formsell = () => {
    return (
        <form method="POST" className={s.form}>
            <div className={s.info__title}>
                <div className={s.info__image}>
                    <input type="file"/>
                </div>
                <div className={s.info__main}>
                    <label htmlFor="nameImage">Name your image</label>
                    <input type="tex" name="nameImage"/>
                    <label htmlFor="priceImage">Price for your image in $</label>
                    <input type="number" name="priceImage"/>
                </div>
            </div>
        </form>
    )
}

export default Formsell;