import React, { useState, useEffect } from 'react'
import axios from "axios"

export const Data = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
             method: "GET",
                url: "https://fakestoreapi.com/products",
        }).then((res) => {
            setData(res.data);
        }).catch((e) => console.log(e))
    },[]);

    return data;
}

export default Data;