import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])
    const [firstLoad, setFirstLoad] = useState(false)
    let BACKEND_URL = process.env.REACT_APP_BACKEND_URL

    useEffect(() => {
        if (!firstLoad) {
            setFirstLoad(true)
            fetch(`${BACKEND_URL}/foods`)
                .then(res => res.json())
                .then(data => setFoods(data.foods))
        }
        setTimeout(() => {

            fetch(`${BACKEND_URL}/foods`)
                .then(res => res.json())
                .then(data => setFoods(data.foods))
        }, 5000)
    }, [BACKEND_URL, firstLoad, foods])
    return [foods, setFoods]
}

export default useFetch
