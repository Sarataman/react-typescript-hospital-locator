import React, { FC, useState } from 'react'
import axios from 'axios'
import SearchForm from '../Components/SearchForm'
import HospitalCard from '../Components/HospitalCard'

 const Search:FC = () => {

    const hospitalData: Array<hospitalDataTypes> =[]

    const fetchBooks: Function = async () => {
        // Ajax call to API using Axios
        hospitalData.push(await axios.get(``));
        // Books result
        console.log();
    }

    const [result, setResults] = useState(hospitalData)

    return (
        <div>
            <SearchForm />
            
            {result.map(hospital => <HospitalCard hospitalData={hospital} />)}
        </div>
    )
}

export default Search