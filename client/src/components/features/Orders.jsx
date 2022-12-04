import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useDataContext } from '../../context/dataContext';


const Orders = () => {
    const { orders }= useDataContext()
  return (
    <>
    <MDBRow className=' p-5'>
  <MDBCol className="square border m-2">
    user in last 30 days
  <CircularProgressbarWithChildren value={66} strokeWidth={3}>
    <strong>78</strong>
  <div style={{fontSize: 20, marginTop: -5}}>
    from 400 total.
  </div>
</CircularProgressbarWithChildren>
  </MDBCol>
  <MDBCol className="square border m-2">
  orders in last 30 days 
<CircularProgressbarWithChildren value={66} strokeWidth={3}>
    <strong>200</strong>
  <div style={{fontSize: 20, marginTop: -5}}>
    from 887 total.
  </div>
</CircularProgressbarWithChildren>
  </MDBCol>
  <MDBCol className="square border m-2"> 
  <h4>new orders</h4>
    <MDBTable responsive>
    <MDBTableHead className=''>
      <tr>
        <th scope='order number'>price</th>
        <th scope='name'>products</th>
        <th scope='address'>Date</th>
        <th scope='date'>address</th>
        <th scope='products number'>name</th>
        <th scope='price'>orderNumber</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
        {
            orders.map((data)=>{
                return(
                    <tr>
                        <td>{data.price}</td>
                        <td>{data.productsNum}</td>
                        <td>{data.date}</td>
                        <td>{data.address}</td>
                        <td>{data.name}</td>
                        <td>{data.orderNumber}</td>
                    </tr>
                )
            })
        }
      {/* <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>@fat</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>22</td>
        <td >Larry the Bird</td>
        <td>@twitter</td>
        <td>@twitter</td>
        <td>@twitter</td>
        <td>@twitter</td>
      </tr> */}
    </MDBTableBody>
  </MDBTable>
  </MDBCol>
  </MDBRow>
  </>
  )
}

export default Orders