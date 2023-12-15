import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './style.scss'

export default function Search() {
    const [searchText, setSearchText] = useState("");
    const [countries, setCountries] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,languages,translations,latlng,maps,population,flags,capitalInfo")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    function hideGrid() {
        const listGrid = document.querySelector(".list");
        listGrid.style.display = "none";
        setSearchText("");
    }
            
    function handleSearchCountries() {
        let results = [];
        
        results = countries.filter((country) => 
            country.translations.fra.official.toLowerCase().includes(document.querySelector("input").value.toLowerCase())
        );
        setSearchText(document.querySelector("input").value);
        console.log(results);
        setSearchResults(results);
        const listGrid = document.querySelector(".list");
        if(document.querySelector("input").value !== "" && listGrid.style.display !== "grid"){listGrid.style.display = "grid"};
    }

    return (
        <div className="search">
            <div className="background">
                <img src="/background.jpg" alt="background" />
                <div>
                    <h1>FORMULAIRE DE RECHERCHE DE PAYS</h1>
                </div>
            </div>
            <div className="formulaire">
                <div className="text_input input-group mb-4 col-6">
                    <input type="text" value={searchText} name="input_text" onChange={(e) => {(e.target.value !== "" ? handleSearchCountries() : hideGrid())}} className="form-control" placeholder="Lettres dans le nom du pays" aria-label="Lettres dans le nom du pays" aria-describedby="basic-addon2" />
                    <div className="btn-group input-group-append">
                        <button className="btn btn-outline-primary" type="button" onClick={handleSearchCountries}>OK</button>
                    </div>
                </div>
            </div>               
            <div className="list">
                {searchResults.map((country) => (
                    <Link to={"/country/" + country.name.common} key={"Link_" + country.name.common}>
                    <div key={"key_" + country.name.official} className="card">
                        <div className="div_flag">
                            <img src={country.flags.svg} alt={country.name.common} />
                        </div>
                        <div className="div_name">
                            <h2 className="countryName">{country.translations.fra.official}</h2>
                            <h2 className="capital"><span>Capitale :</span> {country.capital}</h2>
                            <h2 className="region"><span>Continent :</span> {country.region}</h2>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}