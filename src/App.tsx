import React, {useEffect, useState} from 'react';
import {CountryType} from "./types";
import axios from "axios";
import Loading from "./components/Loading";
import Country from "./components/Country";

function App() {
    const [countries, setCountries] = useState<CountryType[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    const getCountries = async () => {
        setLoading(true);

        try {
            const {data} = await axios.get<CountryType[]>(
                'https://restcountries.eu/rest/v2/all'
            );
            setCountries(data);
        } catch (err) {
            console.log('Error: ', err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCountries().then();
    }, [])

    return (
        <div>
            <Loading loading={loading}>
                {countries.map((country) => {
                    return <Country key={country.name} country={country}/>
                })}
            </Loading>
        </div>
    );
}

export default App;
