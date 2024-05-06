import { Button, CardMedia, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react";

export default function Cart(){
    const [items, setItems] = useState([]);
    var cartItems = JSON.parse(localStorage.getItem("cart-items"))
    var total = 0;
    cartItems?.map((item, i)=> {
        total = total + item.total
    })

    const handelIncrease = (id) => {
        cartItems?.map((item, i)=> {
            if(item.id === id){
                cartItems[i] = {
                    ...cartItems[i],
                    count: cartItems[i].count + 1,
                    total: cartItems[i].total + cartItems[i].price 
                }
            }
        })

        localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }

    const handelDecrease = (id) => {
        cartItems?.map((item, i)=> {
            if(item.id === id && cartItems[i].count > 1){
                cartItems[i] = {
                    ...cartItems[i],
                    count: cartItems[i].count - 1,
                    total: cartItems[i].total - cartItems[i].price 
                }
            }
        })

        localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }

    const handelRemove = (id) => {
        cartItems?.map((item, i)=> {
            if(item.id === id){
                cartItems.splice(i, 1);
            }
        })

        localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }

    useEffect(()=>{
        setItems(cartItems)
    },[cartItems])

    return <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {items?.map((item, i)=> (
                    <TableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell>
                        <CardMedia
                            component="img"
                            sx={{
                                width:"50px",
                                height:"50px"
                            }}
                            image={item?.image}
                            alt="Paella dish"
                        />
                        </TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.count}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.total}</TableCell>
                        <TableCell>
                            <Stack spacing={1} direction={"row"}>
                                <Button variant="contained" onClick={() => handelIncrease(item.id)} >+</Button>
                                <Button variant="contained" onClick={() => handelDecrease(item.id)} >-</Button>
                                <Button variant="contained" onClick={() => handelRemove(item.id)} sx={{backgroundColor:"red"}}>Remove</Button>
                            </Stack>
                        </TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>

        <Typography p={3} sx={{float:"right"}}>Total: {total}</Typography>
    </>
}