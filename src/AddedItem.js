import { Table, Container } from 'react-bootstrap'

export default function AddedItem( {mat} ) {
    return (
        <tr>
            <td>{mat.itemName}</td>
            <td>{mat.quantity}</td>
            <td>{mat.singlePrice}</td>
            <td>{mat.fullPrice}</td>
        </tr>

    )
}