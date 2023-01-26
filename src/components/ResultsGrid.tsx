import { CollectionItem } from "@/data/collection";
import { ResultsGridItem } from "./ResultsGridItem";

interface ResultsGridProps {
    results: CollectionItem[];
}

export const ResultsGrid = ({ results }: ResultsGridProps) => {
    return (
        <div id="results-grid">
            {results.map((item, index) => (
                <ResultsGridItem name={item.name} hex={item.hex} key={index} />
            ))}
        </div>
    );
};
