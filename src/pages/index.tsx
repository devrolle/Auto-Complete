import Loading from "@/components/Loading";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";
import { collection } from "../data/collection";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);

    setTimeout(() => {
        console.log("Data: ", collection);
        setLoading(false);
    }, 8000);

    return <>{loading ? <Loading /> : <SearchResults data={collection} />}</>;
}
