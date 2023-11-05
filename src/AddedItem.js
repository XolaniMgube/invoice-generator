import { Table, Container, Button } from 'react-bootstrap'
import { MdOutlineCancel } from "react-icons/md";



export default function AddedItem( {mat, handleFilterOnDelete} ) {

    function handleDelete (e) {
        console.log("xolani")
        e.preventDefault()

        handleFilterOnDelete(mat)
    
    }

    return (
        <tr>
            <td>{mat.itemName}</td>
            <td>{mat.quantity}</td>
            <td>{mat.singlePrice}</td>
            <td>{mat.fullPrice}</td>
            <td><Button onClick={e => handleDelete(e)} variant="danger">Delete</Button></td>
        </tr>

    )
}