import { useEffect, useState } from "react"
import Jobpost from "./Jobpost"

function App() {
  const [dataset, setDataSet] = useState([])
  const [filterList, setFilterList] = useState([])
  async function getData(){
    setDataSet([])
    await fetch('./data.json')
    .then((response) => response.json())
    .then((result) => {
      setDataSet(result)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  

  function handleFilter(e){
    if(!filterList.includes(e.target.value)){
      setFilterList([...filterList, e.target.value])
    }
  }

  function removeFilter (filter) { 
    let new_list = filterList.filter((item) => item != filter)
    // console.log(e)
    setFilterList(new_list)
  }

  function clearFilters(){
    setFilterList([])
  }

  useEffect(() => {
    // console.log(filterList)
    const filter_res = []
    if(filterList.length == 0){
      getData()
    }
    filterList.forEach((item) => {
      dataset.filter((post) => {
        if(
          post.role == item ||
          post.level == item ||
          post.languages.includes(item) ||
          post.tools.includes(item)
        ){
          filter_res.push(post)
        }
      })
    })
    
    setDataSet(filter_res)
    console.log(dataset)
  }, [filterList])

  

  return (
    <>
      <img id="background-img" src="./images/bg-header-desktop.svg" alt="background" />
      <div className={`${filterList.length >= 1 ? "filters" : "hidden"}`}>
        <div>
          {
          filterList.map((filter, index) => <span key={index} className="filter-item">{filter}  <button className="remove-filter" value={filter} onClick={() => removeFilter(filter)}>X</button></span>)
          }
        </div>
        
        <span id="clear-filter" onClick={() => clearFilters()}>Clear</span>
      </div>
      <div className="App">
        {
          dataset.map((jobPost) => {
            return (
                <Jobpost
                  id = {jobPost.id}
                  company = {jobPost.company}
                  logo = {jobPost.logo}
                  isNew = {jobPost.new}
                  featured = {jobPost.featured}
                  position = {jobPost.position}
                  role = {jobPost.role}
                  level = {jobPost.level}
                  postedAt = {jobPost.postedAt}
                  contract = {jobPost.contract}
                  location = {jobPost.location}
                  languages = {jobPost.languages}
                  tools = {jobPost.tools}
                  handleFilter={() => handleFilter}
                />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
