/*
La liste des devises (nom et symbole)
Les différents langages
Tous les pays frontaliers 😈
et un lien gmap pour retrouver le pays
*/

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './style.scss'

export default function Country() {
    const [country, setCountry] = useState([]);
    const { name } = useParams();
    const [all, setAll] =useState([]);
    let borders = [];
    let bordersLand = [];
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [name])

    /* https://restcountries.com/v3.1/all?fields=name*/
    function getBorders(){
        country.map((ct) => (
            ct.borders ?
            fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setAll(data))
            : ""
        ))
        if(all.length > 0){
            borders = [];
            country.map((ct) => (
                ct.borders.map((border) => (
                    borders.push(border)
                ))
            ))
            bordersLand = [];
            borders.map((border) => (
                all.map((land) => (
                    land.fifa === border ? bordersLand.push(land) : ""
                ))
            ))
        }
    }

    getBorders();

    return (
        <div className="Land">
            <div className="background">
                <img src="/background.jpg" alt="background" />
                <div>
                    <h1>FICHE D'UN PAYS</h1>
                </div>
            </div>
            <div className="list">
                {country.map((ct) => (
                    <div className="card" key={"key_" + ct.name.official}>
                        <section className="div_flag">
                            <img src={ct.flags.svg} alt={ct.name.official} />
                            <Link to="/" className="btn btn-success">&#171;   Retour
                            </Link>
                        </section>
                        <div>
                            <h2>Pays : <span className="span_land">{ct.name.common}</span></h2>
                            <h2>Traduction: <span className="span-trad">{ct.translations.fra.official}</span></h2>
                            <h2>Capitale :
                                {ct.capital ? ct.capital.map((cpt) => (
                                    <span key={"key_" + cpt}> {cpt} </span>
                                )) : <span> Aucune</span>}
                            </h2>
                            <h2>Continent : <span> {ct.region}</span></h2>
                            <h2>Devise(s) :
                                {ct.currencies ? Object.values(ct.currencies).map((currency) => (
                                    <span key={"key_" + currency.name}> {currency.name} ({currency.symbol})</span>
                                )) : <span> Aucune</span>}
                            </h2>
                            <h2>Langue(s) :
                                {ct.languages ? Object.values(ct.languages).map((key) => (
                                    <span key={"key_" + key}> {key} </span>
                                )) : <span> Aucune</span>}
                            </h2>
                            <h2>Pays frontalier(s) :
                                <ul>
                                {/* {ct.borders ? Object.values(ct.borders).map((key) => (
                                    <li key={"border_" + key}> {key} </li>
                                )) : <span> Aucun</span>} */}
                                {bordersLand.length > 0 ? (bordersLand).map((bL) => (
                                <li key={"border_" + bL.translations.fra.official}> {bL.translations.fra.official} </li>
                                )) : <span> Aucun</span>}
                                </ul>
                            </h2>
                            <h2>
                                <a href={ct.maps.googleMaps} target="_blank" rel="noreferrer">Google Maps</a>
                            </h2>
                        </div>
                    </div>

                ))}
            </div>
        </div>

    );
}