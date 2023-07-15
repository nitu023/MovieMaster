/* eslint-disable react/prop-types */
import { Pagination } from '@mui/material'
import './CustomPagination.css'

const CustomPagination = ({setPage, totalPages}) => {

    const handlePageChange = (page)=>{
        setPage(page)
        window.scroll(0,0)
    }

  return (
    <div className='customPagination'>
          <Pagination count={totalPages} color="primary" onChange={(e)=>{
            handlePageChange(e.target.textContent)
          }} />
        
        </div>
  ) 
}

export default CustomPagination