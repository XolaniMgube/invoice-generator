import { Card, ListGroup } from 'react-bootstrap'

export default function TaxAmounts( {total} ) {
    const tax = total * (14/100)

    return (
        // <div className="tax-amounts">
        //     <p>Before Tax: R{total}</p>
        //     <p>Tax: R{tax.toFixed(2)}</p>
        //     <p>After Tax: R{tax + total}</p>
        // </div>

        <Card className='my-3'>
            <ListGroup variant="flush">
                <ListGroup.Item>Before Tax: R{total}</ListGroup.Item>
                <ListGroup.Item>Tax:  R{tax.toFixed(2)}</ListGroup.Item>
                <ListGroup.Item>After Tax: R{tax + total}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}