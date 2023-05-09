import Box from '@mui/material/Box';
import './BottomNav.css'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
    const [value, setValue] = useState(0);
    let navigate = useNavigate()

    useEffect(()=>{
        if(value === 0) navigate('/')
        else if (value === 1) navigate('/movies')
        else if (value === 2) navigate ('/series')
        else if(value === 3) navigate('/search')
    } , [value , navigate])


    return (
        <div className='bottomNav'>
            <Box className='box' sx={{ width: 1 }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction  label="Trending" icon={<WhatshotIcon  />} />
                    <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
                    <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
                    <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                </BottomNavigation>
            </Box>
        </div>
    )
}

export default BottomNav