import search from './search.module.css';
import SearchResult from './SearchResult';

export default function SearchList(props) {

  const { resultsList } = props;

  let list = resultsList.map((result) => {
    return <SearchResult key={result._id} obj={result} />;
  });

  return <div className={search.results}>{list}</div>;
}
