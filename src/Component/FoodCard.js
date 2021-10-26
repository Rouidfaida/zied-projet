import React from 'react'
// import { Card,Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'



const FoodCard = ({mov}) => {

    return (
        <div>
            
            <div style={{display:"flex",flexWrap:"wrap",}}>
            {
              <Card >
               {/* marginBottom: '20px',marginTop:"30px"}}> */}
                
<h6 style={{marginLeft:"20px"}}>{mov.product_type}</h6>
       <img  src={mov.image_link} alt="" />
          <p>
            {mov.name}
          </p>
          {/* <h4>
           {mov.brand}
          </h4> */}

       
      </Card>
           
            
          




    
      
    
  
      }
        </div>
        </div>
    )
}

export default FoodCard
