import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './detail.module.css'
import axios from 'axios'
import Header from '../../components/header/header'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'

function Details() {
    const [data, setData] = useState({})
    const params = useParams()

    useEffect(() => {
        axios
            .get(`https://rentalvehicle.herokuapp.com/vehicle/${params.id}`)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log('🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err', err)
            })
    }, [])

    const [quantity, setQuantity] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setQuantity(event.target.value)
    }

    return (
        <>
            <div className="container">
                <Header />
                <div className={style.content}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>{/* <CardMedia component="img" height="300" width="120" image={data.images.path} alt={data.name} /> */}</CardContent>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {data.name}
                            </Typography>
                            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                {data.city}
                            </Typography>
                            <Typography sx={{ mb: 2 }} color="text.secondary">
                                {data.available}
                            </Typography>
                            <Typography sx={{ mb: 2 }} color="text.secondary">
                                {data.prepayment}
                            </Typography>
                            <Typography sx={{ mb: 2 }} color="text.secondary">
                                Capacity: {data.capacity} person
                            </Typography>
                            <Typography sx={{ mb: 2 }} color="text.secondary">
                                Type: {data.type}
                            </Typography>
                            <Typography sx={{ mb: 2 }} color="text.secondary">
                                Reservation: {data.reservation}
                            </Typography>
                            <Typography sx={{ fontSize: 35, textAlign: 'right' }} variant="body2">
                                Rp. {data.price}/day
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Quantity</InputLabel>
                                <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={quantity} onChange={handleChange} label="Quantity">
                                    <MenuItem value={data.quantity}>{data.quantity}</MenuItem>
                                </Select>
                            </FormControl>
                        </CardActions>
                        <Button sx={{ margin: '20px' }} variant="contained" endIcon={<AddShoppingCart />}>
                            Add to cart
                        </Button>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Details
