import s from './Search.module.css';

const Search = () => {
    return (
        <div className={s.frame__search}>
            <input className={s.search} type="text" placeholder="🔎search"/>
            <select className={s.search__filter}>
                <option value="all">All Art</option>
                <option value="paintings">Paintings</option>
            </select>
            <button className={s.search__button}></button>
        </div>
    )
}

export default Search;