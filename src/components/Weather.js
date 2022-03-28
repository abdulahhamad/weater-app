import { Container, Grid, Paper } from '@mui/material'
import React from 'react'

export default function Weather({ weatherData }) {

    return (
        <>
            <Container>
                <Paper sx={{ p: 2, mt: 5 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <h1>City Name: {weatherData.name}</h1>
                            <p>Temprature: {weatherData.main.temp} &deg;C</p>
                            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                            <p>Description: {weatherData.weather[0].description}</p>
                            <p>Humidity: {weatherData.main.humidity} %</p>
                        </Grid>
                        <Grid item xs={6}>
                            
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}
