import "./Search.css";
const Search=({searchedData})=>{
    const handleSearch=(e)=>{
        searchedData(e.target.value);
    }
    return(
        <div className="searchContainer">
             <input type="text" placeholder="Search Here..." onChange={(e)=>handleSearch(e)}/>
        </div>
    )
}

export default Search;