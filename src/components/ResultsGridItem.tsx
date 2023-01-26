import { CollectionItem } from "@/data/collection";

export const ResultsGridItem = ({ name, hex }: CollectionItem) => {
    return (
        <div className="grid-item">
            <p>{name}</p>
            <p>{`#${hex}`}</p>
        </div>
    );
};
