function User(props){
    console.log("User List--->",props.UserList);
    var user = [{
        Id:101,
        Role:'Manager',
        Name:'surya',
        Mobile:9000002220,
        Email:'surya@gmail.com'
    },
    {
        Id:102,
        Role:' Asst.Manager',
        Name:'ajith',
        Mobile:9000002221,
        Email:'ajith@gmail.com'
    },
    {
        Id:103,
        Role:'TL',
        Name:'vijay',
        Mobile:9000002222,
        Email:'vijay@gmail.com'
    },
    {
        Id:104,
        Role:'ios developer',
        Name:'arun',
        Mobile:9000002223,
        Email:'arun@gmail.com'
    },
    {
        Id:105,
        Role:'android developer',
        Name:'rahul',
        Mobile:9000002224,
        Email:'rahul@gmail.com'
    },
    {
        Id:106,
        Role:'reactjs',
        Name:'virat',
        Mobile:9000002225,
        Email:'virat@gmail.com'
    },
    {
        Id:107,
        Role:'java developer',
        Name:'dhoni',
        Mobile:9000002226,
        Email:'dhoni@gmail.com'
    },
    {
        Id:108,
        Role:'testing',
        Name:'siva',
        Mobile:9000002227,
        Email:'siva@gmail.com'
    },
    {
        Id:109,
        Role:'testing',
        Name:'vijay',
        Mobile:9000002228,
        Email:'vijay@gmail.com'
    },
    {
        Id:110,
        Role:'Admin',
        Name:'karthi',
        Mobile:9000002229,
        Email:'karthi@gmail.com'
    },
    
    ];

    
console.log("user data",user);



  return(
  
    <div>
      <table border={1}>
      <h1>USERLIST</h1>
        <tr>
         <td>Id</td>
          <td>Role</td>
          <td>Name</td>
          <td>Mobile</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
        {props.UserList.map((user,i) => (
            <tr>
              <td>{user.Id}</td>
              <td>{user.Role}</td>
              <td>{user.Name}</td>
              <td>{user.Mobile}</td>
              <td>{user.Email}</td>
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
  
  export default User;