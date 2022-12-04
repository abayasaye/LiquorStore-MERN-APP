import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import { useDataContext } from '../../../context/dataContext'
import {BarChart} from '../../features/BarChart'
import Card from '../../features/card'
import Header from '../../features/header'


function Home() {
  const {category,department,info,products,stores} = useDataContext()
  return (
   <div>
    <MDBContainer>
    <Header/>
    <Card categories={category} department={department} info={info} products={products} stores={stores}/>
    <BarChart/>
    </MDBContainer>
    </div>
  )
}

export default Home