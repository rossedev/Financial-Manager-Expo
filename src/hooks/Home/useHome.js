import React, { useEffect, useState } from "react";
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

const useHome = (account) => {
  const toast = useToast();
  const [summaryAccount, setSummaryAccount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState(DEFAUlT_FORM);

  useEffect(() => {
    if (account.length <= 0) {
      setSummaryAccount({
        ...summaryAccount,
        total: 0,
        income: 0,
        outcome: 0,
      });
      return;
    }

    const _sumNumbers = (arrays) => {
      let count = 0;
      arrays.forEach((element) => {
        count += parseInt(element.value);
      });
      return count;
    };

    const total = _sumNumbers(account);
    const income = _sumNumbers(account.filter((e) => e.type === "ingreso"));
    const outcome = _sumNumbers(account.filter((e) => e.type === "egreso"));

    setSummaryAccount({
      ...summaryAccount,
      total,
      income,
      outcome,
    });
  }, [account]);

  const changeView = (value) => {
    if (!value) {
      _cleanForm();
    }
    setModalVisible(value);
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

  const onChangeForm = (value, name) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const _cleanForm = () => {
    setForm(DEFAUlT_FORM);
  };

  return {
    summaryAccount,
    form,
    modalVisible,
    changeView,
    onChangeForm,
    addRegister
  };
};

export default useHome;
