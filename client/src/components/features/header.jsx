import { MDBNavbar,MDBIcon } from "mdb-react-ui-kit"

const Header = ()=>{
    return(
        <MDBNavbar bgColor="blue" className="">
        <img className=" w-25" src="/LiquorStore-Logo.png" alt="" />
        <MDBIcon className='ms-1' icon='user' size='2x' />
        </MDBNavbar>
    )
}
export default Header