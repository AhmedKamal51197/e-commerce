import { useEffect, useState } from "react"
import axios from "axios";
import { CardMedia, Grid, Pagination, Stack, Typography } from "@mui/material";
import RecipeReviewCard from "./RecipeReviewCard";
import { Link } from "react-router-dom";

export default function ClothesList(){
    const [colthes, setClothes] = useState([]);
    const [pageColthes, setPageClothes] = useState([]);
    const [page, setPage] = useState(1);
    
    const handleChange = (event, value) => {
        setPage(value);
        const start = (page - 1) * 5;
        setPageClothes(prev => colthes.slice(start, start + 5));
    };

    useEffect(() => {
      axios
        .get(
          "https://fakestoreapi.com/products"
        )
        .then((result) => {
          setClothes(result.data);
          setPageClothes(prev => result.data.slice(0, 5));
        })
        .catch((err) => console.log(err));
    }, []);

      return (
        <Stack spacing={2}>
          <Grid container spacing={2}>
            {pageColthes.map((c,index)=>(
              <Grid item xs={4} key={index}>
                  <Link style={{textDecoration:"none"}} to={`item-details/${c.id}`}>
                    <RecipeReviewCard 
                      title={c.title} 
                      cat={c.category}  
                      image={c.image} 
                      description={c.description}
                    />
                  </Link>
                </Grid>
            ))}
          </Grid>
          <Pagination 
            count={4} 
            color="primary" 
            page={page} 
            onChange={handleChange} 
          />
        </Stack>
      )
}