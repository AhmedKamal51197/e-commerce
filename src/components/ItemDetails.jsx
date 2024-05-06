import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { Button, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from "@mui/material";
import RecipeReviewCard from "./RecipeReviewCard";

export default function ItemDetails(){
    const [item, setItem] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    const handdelAddToCart = ()=>{
      var logedInUser = localStorage.getItem("loged-in-user");
      if(logedInUser){
        var cartItems = JSON.parse(localStorage.getItem("cart-items"))
        var isItemExists = false;
        cartItems?.map((i, index)=>{
          if(i.id === item.id){
            isItemExists = true;
            cartItems[index] = {
              ...cartItems[index],
              count: cartItems[index].count + 1,
              total: cartItems[index].total + item.price
            }
          }
        })
        
        if(!isItemExists){
          if(cartItems){
            cartItems?.push({
              id: item.id,
              count: 1,
              price: item.price,
              total: item.price,
              title: item.title,
              image: item.image
            })
          }
          else{
            cartItems = [{
              id: item.id,
              count: 1,
              price: item.price,
              total: item.price,
              title: item.title,
              image: item.image
            }];
          }
        }
        localStorage.setItem("cart-items", JSON.stringify(cartItems))
      }
      else{
        navigate("/login");
      }
      var cartItems = JSON.parse(localStorage.getItem("cart-items"))
      console.log("cart-items: ", cartItems)
    }
    
    useEffect(() => {
      if(id){
        axios
        .get(
          `https://fakestoreapi.com/products/${id}`
        )
        .then((result) => {
          setItem(result.data);
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
                  Price: {item?.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.description}
                </Typography>
                <Button onClick={handdelAddToCart}>Add to card</Button>
            </CardContent>
        </Stack>
    )
}