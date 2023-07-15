
import { Button, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react"
import './Search.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from "axios";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";


const Search = () => {

  const [type, setType] = useState(0)
  const [page , setPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [content, setContent] = useState([])
  const [totalPages, setTotalPages] = useState()

  const fetchSearch = async()=>{
    
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type?'tv':'movie'}?api_key=fa3cc0a92ba7aff7d30336ebc415def7&language=en-US&query=${searchText}&page=${page}&include_adult=false`)

      setContent(data.results)
      setTotalPages(data.total_pages)
      
  }

  useEffect(()=>{
    window.scroll(0,0)
    fetchSearch()
  }, [page, type, searchText ])

  return (
    <div className="subTitle">
      <div className="search">
        <TextField
          style={{ width: '50%', backgroundColor: 'white' }}
          className="search"
          label="Search"
          variant="filled"
          onChange={(e) => {setSearchText( e.target.value) }}

        />

        <Button onClick={fetchSearch} color="secondary" variant="contained">{<SearchIcon />}</Button>
      </div>
      <div className="tabs">
        <Tabs
        onChange={(event,newValue)=>{
          setType(newValue)
          setPage(1)
        }}
        
        style={{ marginTop:'.3rem'   ,
         width:' fit-content', margin:'auto'}}  value={type} indicatorColor="primary" textColor="primary" >
          <Tab label="Search Movies" />
          <Tab  label="Saerch TV Series" />
        </Tabs>

       <div className="resut">
       < SingleContent trendingDatas ={content} />

        {
          searchText && !content &&
          (type ? <h2>No Series Found</h2> :  <h2>No Movies Found</h2>)
        }

    {
      totalPages > 1 &&
        <CustomPagination setPage={setPage} totalPages={totalPages} />
    }
       </div>
      </div>

    </div>
  )
}

export default Search;