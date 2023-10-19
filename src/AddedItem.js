export default function AddedItem( {mat} ) {
    return (
        <div className="added-item">
            <span style={{paddingRight: "20px"}}>{mat.itemName}</span>
            <span style={{paddingRight: "20px"}}>{mat.quantity}</span>
            <span style={{paddingRight: "20px"}}>R{mat.singlePrice}</span>
            <span>R{mat.fullPrice}</span>
        </div>
    )
}