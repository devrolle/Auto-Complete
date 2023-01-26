import Loading from "@/components/Loading";
import SearchResults from "@/components/SearchResults";
import { useEffect, useState } from "react";
import { collection, CollectionItem } from "../data/collection";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<CollectionItem[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setData(collection);
            setLoading(false);
        }, 8000);
    }, []);

    return <>{loading ? <Loading /> : <SearchResults data={data} />}</>;
}
