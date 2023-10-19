import AddedItem from "./AddedItem";

export default function AddedItemsList( {material} ) {
    return (
        <div className="added-items-list">
            {material.map(mat => (
                <AddedItem mat={mat} key={crypto.randomUUID()} />
            ))}
            
        </div>
    )
}