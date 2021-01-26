import {useState} from 'react'
import SearchForm from './SearchForm'
import SearchList from './SearchResultsList';
import { POSTtoProviders } from '../lib/FetchShortcuts';
import { BeautyProviders } from "../lib/mockProviders";
import NavBar from './NavBar';

export default function SearchPage() {
    const [resultsList, setResultsList] = useState([])

    const fetchResults = (data) => {
        let queryParams
        if (data.companyName) {
             queryParams = `?type=${data.type}&category=${
              data.category
                }&companyName=${data.companyName}`
        } else (
            queryParams = `?type=${data.type}&category=${
              data.category}`
      )
      //with real request:
      //POSTtoProviders(queryParams, JSON.stringify([])).then(res => setResultsList(res))
      
      //simulating response for now
      setResultsList(BeautyProviders);
    }

    return (
      <>
        <NavBar />
        <SearchForm search={(data) => fetchResults(data)} />
        <SearchList resultsList={resultsList} />
      </>
    );
}
