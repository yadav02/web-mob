import React, {useState}  from 'react';
import Data from  './data.json'
import { Card, Avatar } from 'antd';


const { Meta } = Card;
// console.log(Data);
const Service = () => {
  let total = 0;
   
  const [data, setData] = useState(Data);

   return (
 
      <>
      <div style = {{backgroundColor: '#F5F5F5',
       borderRadius:'12px',
        width:'90%',
        marginTop:'40px',
        marginLeft:'62px'
        }}>
       <h2 style={{marginLeft:'22px'}}>PURCHASED SERVICES</h2>
       <h3 style={{marginLeft:'22px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      {[data.data.purchased_services].map( item => {
        // console.log(item[0].id)
        return (
          item.map(rev => {
            // console.log(rev)
           
            return (
              <div>
              
              {
                rev.purchased_office_template.purchased_office_services.filter(filterList => filterList.service_selected).map( rev1 => {
                  // console.log(rev1)
                  if(rev1.service_selected){
                    console.log(rev1)
                  }
                  return (
                    <div>
                    <h3 style={{marginLeft:303}}>{rev.name}:</h3>
                    <Card style={{ width: 700, marginTop: 25, marginLeft:303 }}>
                   
                       <Meta
                       avatar={
                          <Avatar style={{borderRadius:'8px'}} src={rev1.image} />
                        }
                        title={rev1.name}
                        // price={`Price${rev1.price}`}
                        description={rev1.description}
                        
                      />
                       <h3 style={{position:'relative', left:'86%', top:'-75px'}}>{`Kr ${rev1.price}`}</h3> 
                    </Card>
                    </div>    
                  )

                })

              }
              
            </div>
            )
          })

        )
        

      })
      
        
}
<div style={{
  backgroundColor: 'black',
  borderRadius:'12px',
   width:'80%',
   marginTop:'40px',
   marginLeft:'142px'
}}>
  {
       [data.data.purchased_services].map( item => {
       
        return (
          item.map(rev => {
           
            return (
              <div>
              
              {
              
                rev.purchased_office_template.purchased_office_services.filter(filterList => filterList.service_selected).map( rev1 => {
              
                  total += Number(rev1.price);
                  console.log(total);    
                  return (
                    <div style={{display:'flex'}}>
                  <h3 style={{
                    color:'white',
                    position:'relative',
                    left:'2%'
                     }}>
                   {rev1.name}
                  </h3>
                  <h3 style={{
                    color:'white',
                    position:'relative',
                    left:'78%'

                     }}>Kr{rev1.price}</h3>
                     
                  </div>  
                  )

                })

              }

            </div>
            )
          })

        )
        

      })
      
        
}
<div style={{display:'flex'}}> 
 <h3 style={{
  color:'	#cd5c5c',
   position:'relative',
   left:'2%'
   }}>Total Costing</h3>
<h3 style={
  {color:'white',
   position:'relative',
   left:'78%'}}>
     {`Kr ${total}`}</h3>
 </div>
  </div>
</div>

<div style = {{backgroundColor: '#F5F5F5',
       borderRadius:'12px',
        width:'90%',
        marginTop:'40px',
        marginLeft:'62px'
        }}>
      <h2 style={{marginLeft:'22px'}}>ADDITIONAL SERVICES</h2>
      <h3 style={{marginLeft:'22px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      {[data.data.purchased_services].map( item => {
        // console.log(item[0].id)
        return (
          item.map(rev => {
            // console.log(rev)
           
            return (
              <div>
              {
                rev.purchased_office_template.purchased_office_services.filter(filterList => filterList.service_selected === null || filterList.service_selected === undefined).map( rev1 => {
                  console.log(rev1)
                  return (
                    <div>
                      <h3 style={{marginLeft:303}}>{rev.name}</h3>
                    <Card style={{ width: 700, marginTop: 25, marginLeft:303 }}>
                       <Meta
                       avatar={
                          <Avatar style={{borderRadius:'8px'}} src={rev1.image} />
                        }
                        title={rev1.name}
                        description={rev1.description}
                      />
                      <h3 style={{position:'relative', left:'86%', top:'-75px'}}>{`Kr ${rev1.price}`}</h3> 
                    </Card>
</div>
                  )

                })

              }
            </div>
            )
          })

        )
        

      })
        
}
</div>

      </>
   )

  
}
 
export default Service;
