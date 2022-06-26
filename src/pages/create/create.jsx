import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import Header from '../../components/header/header'
import style from './create.module.css'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    // const [name, setName] = useState('');
    // const [name, setName] = useState('');
    // const [name, setName] = useState('');
    // const [name, setName] = useState('');
    // const [name, setName] = useState('');
    // const [name, setName] = useState('');

    const saveVehicle = async (e) => {
        e.preventDefault()
        await axios.post('https://rentalvehicle.herokuapp.com/vehicle/', {
            name: name,
        })
        navigate('/')
    }

    return (
        <>
            <div className="container">
                <Header />
                <div className={style.content}>
                    <form onSubmit={saveVehicle}>
                        <Typography variant="h6" gutterBottom>
                            Create New Vehicle
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="title" name="name" label="Title" fullWidth autoComplete="title" value={name} onChange={(e) => setName(e.target.value)} variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="city" name="city" label="City" fullWidth autoComplete="city" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="image" name="image" label="Image URL" fullWidth autoComplete="image" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="reservation" name="capacity" label="Capacity" fullWidth autoComplete="capacity" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="reservation" name="revervation" label="Revervation" fullWidth autoComplete="revervation" variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="quantity" name="quantity" label="Quantity" fullWidth autoComplete="quantity" variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="price" name="price" label="Price (Rp.)" fullWidth autoComplete="price" variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <FormLabel required id="demo-row-radio-buttons-group-label">
                                        Prepayment
                                    </FormLabel>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <FormLabel required id="demo-row-radio-buttons-group-label">
                                        Availabel
                                    </FormLabel>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained">Create</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </>
    )
}
