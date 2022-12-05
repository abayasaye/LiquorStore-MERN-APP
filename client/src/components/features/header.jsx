import { MDBNavbar,MDBIcon } from "mdb-react-ui-kit"

const Header = ()=>{
    return(
        <MDBNavbar bgColor="blue" className="">
        <img className=" w-25" src="/LiquorStore-Logo.png" alt="" />
        <MDBIcon fas icon="user-alt"/>
        </MDBNavbar>
    )
}
export default Header