import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch(`${process.env.BACKEND_URL}/foods`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [foods])
    return [foods, setFoods]
}

export default useFetch
