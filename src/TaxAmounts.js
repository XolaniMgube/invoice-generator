export default function TaxAmounts( {total} ) {
    const tax = total * (14/100)

    return (
        <div className="tax-amounts">
            <p>Before Tax: R{total}</p>
            <p>Tax: R{tax.toFixed(2)}</p>
            <p>After Tax: R{tax + total}</p>
        </div>
    )
}