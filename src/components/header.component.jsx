import { Fragment } from "react";
const header = ({ setCategory , setDate}) => {
  return (
    <Fragment>
      <div className="header">
        <h1>InsightHub</h1>
        <div className="headerInput">
        <input
          type="search"
          placeholder="Search News"
          className="searchInput"
          onChange={(e) => {e.target.value !== "" ? setCategory(e.target.value) : setCategory('india')}}
        ></input>
        <input
            type="date"
            className="dateInput"
            onChange={(e) => {e.target.value !== "" ? setDate(e.target.value) : setDate('2023-11-13')}}
        ></input>
        </div>
      </div>
    </Fragment>
  );
};

export default header;
