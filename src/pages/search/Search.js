import "./search.scss";
import { types } from "../../data/data";
import { useContext, useEffect } from "react";
import PageContext from "../../context/PageContext";

function Search() {
  const searched = false;
  const { setPage } = useContext(PageContext);
  const page = window.location.href.split("/");
  useEffect(() => {
    setPage(page[page.length - 1]);
  }, [page]);
  return (
    <div className="search">
      {!searched && (
        <>
          <div className="unSearchContainer">
            <h3>Browse all</h3>
            <div className="cards">
              {types.map((type, i) => (
                <div className="card" key={i}>
                  <h3>{type.type}</h3>
                  <img src={type.cover} alt=""></img>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
