function Order(props){
    console.log("Order List--->",props.OrderList);
    
    var order = [{
        TrackingId:100011,
        Name:'surya',
        place:'chennai',
        Item:'TV',
        
    
    },
    {
        TrackingId:100012,
        Name:'chowdry',
        place:'coimbatore',
        Item:'cycle',
    
    },
    {
        TrackingId:100013,
        Name:'kathir',
        place:'salem',
        Item:'Table',
    
    },
    
    ]
    
    console.log("order data",order);
    
  return(
  
    <div>
      <table border={1}>
      <h1>ORDERLIST</h1>
        <tr>
         <td>TrackingId</td>
         <td>Name</td>
         <td>place</td>
         <td>Item</td>
         <td>Action</td>
        </tr>
        {props.OrderList.map((order,i) => (
            <tr>
              <td>{order.TrackingId}</td>
              <td>{order.Name}</td>
              <td>{order.place}</td>
              <td>{order.Item}</td>
             <td>
              <button>Edit</button>
              <button>Delete</button>

              </td>
            </tr>
          
          ))}
      
        
        </table>

        
       </div>
  
  
  
  
  
  
  
      );
  
  
  }
  
  export default Order;