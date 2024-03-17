import s from './Formsell.module.css';

const Formsell = () => {
    return (
        <form method="POST" className={s.form}>
            <div className={s.info__title}>
                <div className={s.info__image}>
                    <input type="file" id={s.upload__image} />
                </div>
                <div className={s.info__main}>
                    <label htmlFor="nameImage">Name your image</label>
                    <input type="tex" name="nameImage"/>
                    <label htmlFor="priceImage">Price for your image in $</label>
                    <input type="number" name="priceImage"/>
                </div>
            </div>
            <div className={s.sell}>
                <button>Sell your painting</button>
            </div>
        </form>
    )
}

export default Formsell;