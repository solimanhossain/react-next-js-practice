import { useEffect, useState } from "react";

export default function useFetch({ url }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((resJson) => {
                const data = JSON.parse(resJson);
                setItems(data);
            });
    }, [url]);

    return items;
}
