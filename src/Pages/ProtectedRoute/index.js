import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getData} from "../../Services/Storage/index.js";
// import {USER_DATA} from "../../API"

function ProtectedRoute(props)
{
  const Navigate=useNavigate();
  useEffect(()=>
  {
     const user = getData('USER_DATA');
    
    
    if(!!user)
    {
      Navigate('/');
    }
    if(!user)
    {
      Navigate('/LogIn');
    }
  },[]);


return props.children
}
export default ProtectedRoute;