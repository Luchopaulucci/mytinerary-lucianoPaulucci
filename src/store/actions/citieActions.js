import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_cities = createAsyncThunk('get_cities', async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/cities/get")
        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error);
    }
})

export const filter_cities = createAsyncThunk('filter_cities', async (obj) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/cities/get?citie=${obj.citieSearch}`)
        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error);
        return {
            events: []
        }
    }
})

export const get_citiesById = createAsyncThunk('get_citiesById', async (obj) => {
    try{
        const response = await axios.get(`http://localhost:4000/api/cities/${obj}`)
        return{
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error);
    }
})