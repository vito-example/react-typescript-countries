import React, {FC} from "react";
import {CountryType} from "../types";

interface ICountryProps {
    country: CountryType
}

const Country: FC<ICountryProps> = ({country}) => {

    return (
        <p>
            {country.name} - {country.capital}
        </p>
    )
}

export default Country;