import { MDBNavbar } from "mdb-react-ui-kit"

const Header = ()=>{
    return(
        <MDBNavbar blue bgColor="blue">
        <img className=" w-25" src="/LiquorStore-Logo.png" alt="" />
        <h5>Dashboard</h5>
        </MDBNavbar>
    )
}
export default Header