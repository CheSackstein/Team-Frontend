import {useState} from 'react'
import SearchForm from './SearchForm'
import SearchList from './SearchResultsList';
import { BaseURL, GETFromProviders, POSTtoProvidersUnhandled } from '../lib/FetchShortcuts';
import { BeautyProviders } from "../lib/mockProviders";
import Swal from "sweetalert2";


  
export default function SearchPage(props) {
  const [resultsList, setResultsList] = useState([]);

  const fetchResults = async (data) => {
    let queryParams;
    if (data.companyName) {
      queryParams = `?type=${data.type}&category=${data.category}&search=${data.companyName}`;
    } else queryParams = `?type=${data.type}&category=${data.category}`;
    try {
      let res = await GETFromProviders(
         `available-services${queryParams}`,
        data, 
      );

      console.log('res: ', res);
      if (res.ok) {
        let results = await res.json()
        setResultsList(results);
      } else {
        let err = await res.json()
        console.log('err: ', err);
        Swal.fire("A problem ocurred", "Please try again later", "error");
      }
    } catch(e){
      console.log('e: ', e);
      Swal.fire('A problem ocurred', 'Please try again later', 'error');
    }
    setResultsList(BeautyProviders);
  };

  return (
    <>
      <SearchForm search={(data) => fetchResults(data)} />
      <SearchList resultsList={resultsList} />
    </>
  );
}
