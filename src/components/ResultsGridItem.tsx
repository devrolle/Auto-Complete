import { CollectionItem } from "@/data/collection";

export const ResultsGridItem = ({ name, hex }: CollectionItem) => {
    return (
        <div
            className="grid-item"
            style={{
                border: `2px solid #${hex}`,
            }}
        >
            <div
                className="grid-item__preview"
                style={{
                    backgroundColor: `#${hex}`,
                }}
            />
            <div className="grid-item__content">
                <h3>{name}</h3>
                <p>{`#${hex}`}</p>
            </div>
        </div>
    );
};
