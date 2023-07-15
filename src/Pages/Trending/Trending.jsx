import './Trending.css'
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import SingleContent from "../../Components/SingleContent/SingleContent"
import CustomPagination from '../../Components/CustomPagination/CustomPagination'

const Trending = () => {
  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState([])



  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=fa3cc0a92ba7aff7d30336ebc415def7&page=${page}`)
    setContent(data.results)
    setTotalPages(data.total_pages)
  }


  
  useEffect(() => {
    fetchTrending()
  }, [page])

  return (
    <div>
      <div className="trending">

      <div className="pageTitle"> Most Viewed Movies </div>
      <SingleContent trendingDatas={content}
         />
      </div>
     { totalPages > 1  &&   <CustomPagination setPage={setPage} totalPages={totalPages} />}

    </div>
  )
}

export default Trending