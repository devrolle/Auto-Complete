import { useEffect, useState } from "react";
import { CollectionItem } from "@/data/collection";
import { ResultsGrid } from "./ResultsGrid";

interface SearchResultsProps {
    data: CollectionItem[];
}

export default function SearchResults({ data }: SearchResultsProps) {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<CollectionItem[]>(data);

    useEffect(() => {
        // If the user hasn't searched anything, display all the items we have
        if (searchQuery === "") {
            setSearchResults(data);
            return;
        }

        // Filter data based on items containing search query and update search results
        const matchingItems: CollectionItem[] = [];
        data.map((color) => {
            if (color.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                matchingItems.push(color);
            }
        });

        setSearchResults(matchingItems);
    }, [searchQuery]);

    return (
        <section>
            <header>
                <h1>Color Selector</h1>
                <p>
                    Welcome to the color selector! Use the following search bar
                    to look through the various colors saved in our database.
                </p>
            </header>
            <div id="search-bar-container">
                <input
                    type="text"
                    id="search-bar"
                    placeholder="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <ResultsGrid results={searchResults} />
        </section>
    );
}
