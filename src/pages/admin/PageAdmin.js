import "../common/css/Page.css";

import { useEffect, useState } from "react";

import { deleteUserAPIMethod, getStatAPIMethod } from "../../api/client";

import AdminTitle from "../../components/admin/AdminTitle";
import AdminForm from "../../components/admin/AdminForm";
import { ButtonUnderLine } from "../../components/common/Button";

function PageAdmin(props) {
  //inherited props
  const toggle = props.toggle;

  //own props
  const [statArr, setStatArr] = useState([]);

  //retrieve stat on load
  useEffect(() => {
    getStatAPIMethod().then((st) => {
      if (!st) {
        console.log("No Stat");
        return;
      }

      setStatArr(st);
    });
  }, []);

  const deleteUser = (id) => {
    //delete
    deleteUserAPIMethod(id).then(() => {
      console.log("User Deleted");
      //update statArr
      const newStatArr = statArr.filter((st) => st.user._id !== id);
      setStatArr(newStatArr);
    });
  };

  return (
    <form className="pageContainer">
      <div className="formContainer column">
        <AdminTitle />
        {statArr.map((st) => (
          <AdminForm key={st.user._id} stat={st} deleteUser={deleteUser} />
        ))}
        <div className="row narrowed">
          <ButtonUnderLine onClick={toggle} title="Back to Profile Page" />
        </div>
      </div>
    </form>
  );
}

export default PageAdmin;
