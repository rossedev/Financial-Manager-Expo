import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Provider";
import { useToast } from "native-base";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../config/fb";
import AlertBase from "../../components/AlertBase";

const DEFAUlT_FORM = {
  concept: "",
  date: new Date(),
  owner: "Rosa Morales",
  type: "",
  value: 0,
};

const useNewRegister = () => {
  const toast = useToast();
  const context = useContext(Context);
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState(DEFAUlT_FORM);

  useEffect(() => {
    if (context.newRegister) {
      setModalVisible(true);
      context.setNewRegister(false);
    }
  }, [context]);

  const changeView = (value) => {
    if (!value) {
      _cleanForm();
    }
    setModalVisible(value);
  };

  const onChangeForm = (value, name) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const _cleanForm = () => {
    setForm(DEFAUlT_FORM);
  };

  const addRegister = () => {
    addDoc(collection(database, "accounts"), form)
      .then(() => {
        _cleanForm();
        toast.show({
          render: () => {
            return <AlertBase text="Add register succesfully" />;
          },
        });
      })
      .catch(() => {
        toast.show({
          render: () => {
            return (
              <AlertBase
                text="Error, please contact with ADMIN"
                status="error"
              />
            );
          },
        });
      });
  };

  return {
    form,
    modalVisible,
    changeView,
    onChangeForm,
    addRegister,
  };
};

export default useNewRegister;
