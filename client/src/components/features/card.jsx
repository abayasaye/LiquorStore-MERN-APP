import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBIcon
  } from 'mdb-react-ui-kit';
const Card = ({categories,department ,info,products,stores}) => {
    return (
    <div className=''>
    <MDBRow className="justify-content-between">
        <MDBCol size={3}  className="square border m-2">
    <MDBIcon fas icon="shopping-basket" />
    <br />
        products 
        {
            products.map((data,key)=><h4 key={key} className='h4-text'>{data.total}</h4>)
        }
        total
        </MDBCol>
        <MDBCol size={3} className="square border m-2">
        <MDBIcon fas icon="store" />
        <br />
        stores
        {
            stores.map((data,key)=><h4 key={key} className=' h4-text'>{data.total}</h4>)
        }
        total
        </MDBCol>
        <MDBCol className="square border m-2">
        <MDBIcon fas icon="info" />
        <br />
        info
        {
            info.map((data,key)=><h4 key={key} className=' h4-text'>{data.total}</h4>)
        }
        total
        </MDBCol>
        <MDBCol className="square border m-2">
        <MDBIcon fas icon="list" />
        <br />
        categories
        {
            categories.map((data,key)=><h4 key={key} className='h4-text'>{data.total}</h4>)
        }
        total
        </MDBCol>
        <MDBCol className="square border m-2">
        <MDBIcon far icon="list-alt" />
        <br />
        departments
        {
            department.map((data,key)=><h4 key={key} className='h4-text'>{data.total}</h4>)
        }
        total
        </MDBCol>
    </MDBRow>
    </div>
  )
}

export default Card