/* eslint-disable react/prop-types */
import './SingleContent.css'
import { img_300, unavailable } from '../../config/config'
import React, {useState, useEffect} from 'react';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';


let today = new Date("2021-03-25").toLocaleDateString();


const SingleContent = ({ trendingDatas }) => {
  const [isLiked, setIsLiked] = useState({});

  useEffect(() => {
    const initialIsLiked = trendingDatas.reduce((acc, item) => {
      return { ...acc, [item.id]: false };
    }, {});
    setIsLiked(initialIsLiked);
    // console.log(initialIsLiked)
  }, [trendingDatas]);

  console.log(trendingDatas)

  const handleClickLiked = (id) => {
    setIsLiked((prevIsLiked) => ({
      ...prevIsLiked,
      [id]: !prevIsLiked[id]
    }))
  };

  const cardsDataToShow =
    trendingDatas &&
    trendingDatas.length > 0 &&
    trendingDatas.map((item) => {
      return (
        <Card
          key={item.id}
          sx={{
            mixWidth: 345,
            margin: '10px',
            width: '350px',
            bgcolor: 'black',
            color: 'white'
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                {Math.round(item.vote_average)}
              </Avatar>
            }
            action={
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleClickLiked(item.id)}
              >
              <Badge badgeContent={item.vote_count} color="secondary">
                <FavoriteIcon
                  sx={{ color: isLiked[item.id] ? 'red' : 'white' }}
                  key={item.id}
                />
              </Badge>
              </IconButton>
            }
            title={item.title ? item.title : 'Movie Title is not available'}
            subheader={<Typography sx={{color: 'white',}}>{item.release_date ? item.release_date :  today}</Typography>}
          />
          <CardMedia
            component="img"
            height="254"
            image={
              item.poster_path
                ? `${img_300}/${item.poster_path}`
                : unavailable
            }
            alt={`${item.title}'s thumbnail`}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="white"
              sx={{ fontFamily: 'arial' }}
            >
              {item.overview}
            </Typography>
          </CardContent>
        </Card>
      ) 
    });

  return <>{cardsDataToShow}</>;
};

export default SingleContent