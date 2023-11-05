import Form from "react-bootstrap/Form";

export default function SignIn() {
  return (
    <div className="h-screen w-screen bg-active">
      <div className="text-white w-10/12 text-center py-5">
        <h1>Invoice Calculator</h1>
      </div>
      <div className="w-8/12 ">
        <form>
            <div>
                <label>UserName</label>
                <input className="" type="text" />
            </div>
            <div>
            <label>Passworkd</label>
                <input type="password" />
            </div>
        </form>
        {/* <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form> */}
      </div>
    </div>
  );
}
