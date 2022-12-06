import { MDBNavbar,MDBIcon } from "mdb-react-ui-kit"

const Header = ()=>{
    return(
        <MDBNavbar bgColor="blue" className="">
        <img className=" w-25" src="/LiquorStore-Logo.png" alt="" />
        <h3>DASHBOARD</h3>
        {/* <MDBIcon className='ms-1' icon='' size='2x' /> */}
        </MDBNavbar>
    )
}
export default Header