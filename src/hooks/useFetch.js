import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])
    let BACKEND_URL = process.env.REACT_APP_BACKEND_URL
    console.log(BACKEND_URL)

    useEffect(() => {
        fetch(`${BACKEND_URL}/foods`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [BACKEND_URL, foods])
    return [foods, setFoods]
}

export default useFetch
