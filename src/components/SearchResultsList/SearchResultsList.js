import search from './searchResultsList.module.css';
import SearchResult from '../SearchResult/SearchResult';

export default function SearchList(props) {

  const { resultsList } = props;

  let list = resultsList.map((result) => {
    return <SearchResult key={result._id} obj={result} />;
  });

  return <div className={search.results}>{list}</div>;
}