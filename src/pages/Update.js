import Nav from "../Components/Fragments/Nav"
import Sidebar from "../Components/Fragments/Sidebar"

export const Update = () => {
    return (
        <div className="bg-simple-gradient">
            <Nav />
            <div className="flex">
                <Sidebar />
                <div className="">
                    <h1>Update</h1>
                    <p>page not developed yet...</p>
                </div>
            </div>
        </div>
    )
}