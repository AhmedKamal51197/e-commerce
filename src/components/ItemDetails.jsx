import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { Card, CardContent, CardHeader, CardMedia, Stack, Typography } from "@mui/material";
import RecipeReviewCard from "./RecipeReviewCard";

export default function ItemDetails(){
    const [item, setItem] = useState(null);
    const {id} = useParams();
    
    useEffect(() => {
      if(id){
        axios
        .get(
          `https://fakestoreapi.com/products/${id}`
        )
        .then((result) => {
          setItem(result.data);
          console.log(result.data);
        })
        .catch((err) => console.log(err));
      }
    }, []);
    return (
        <Stack justifyContent={"center"} alignItems={"center"} sx={{ width:"100%" }}>
            <CardMedia
                component="img"
                sx={{
                    width:"300px",
                    height:"300px"
                }}
                image={item?.image}
                alt="Paella dish"
            />
            <CardHeader
                title={item?.title}
                subheader={item?.cat}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {item?.description}
                </Typography>
            </CardContent>
        </Stack>
    )
}