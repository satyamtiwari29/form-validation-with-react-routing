import { getData, removeData } from "../../Services/Storage/index.js";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../API";

function LogOut() {
  const navigate = useNavigate();

  async function onLogOut() {
    let data = getData("USER_DATA");
    console.log(data, "==========");

    let res = await logoutUser(data);

    if (!res.status.error) {
      removeData("USER_DATA");
      navigate("logIn");
    } else {
      console.log(res.status.message);
    }
  }

  return (
    <>
      <button onClick={onLogOut}>LogOut</button>
    </>
  );
}
export default LogOut;
