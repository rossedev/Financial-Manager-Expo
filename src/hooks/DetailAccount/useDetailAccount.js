import { useToast } from "native-base";
import React, { useEffect, useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "../../config/fb";
import AlertBase from "../../components/AlertBase";
import moment from "moment";

const useDetailAccount = (account = []) => {
  const toast = useToast();
  const [newAccount, setNewAccount] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [formEdit, setFormEdit] = useState({});
  const [showConfirmRemoveModal, setShowConfirmRemoveModal] = useState(false);
  const [infoRemove, setInfoRemove] = useState({});

  useEffect(() => {
    setNewAccount([...account]);
  }, [account]);

  const onClickEdit = (infoEdit) => {
    setModalEdit(true);
    setFormEdit(infoEdit);
  };

  const changeEdit = (text, name) => {
    setFormEdit({
      ...formEdit,
      [name]: text,
    });
  };

  const submitEdit = () => {
    const docRef = doc(database, "accounts", formEdit.id);
    updateDoc(docRef, {
      concept: formEdit.concept,
    });

    toast.show({
      render: () => {
        return <AlertBase text="Successful edition" />;
      },
    });

    onCloseEditModal();
  };

  const onCloseEditModal = () => {
    setModalEdit(false);
  };

  const onClickDelete = (infoRemove) => {
    setInfoRemove(infoRemove);
    setShowConfirmRemoveModal(true);
  };

  const onCloseRemoveModal = () => {
    setShowConfirmRemoveModal(false);
  };

  const submitRemove = () => {
    deleteDoc(doc(database, "accounts", infoRemove.id));
    toast.show({
      render: () => {
        return <AlertBase text="Successful remove" />;
      },
    });
    onCloseRemoveModal();
  };

  const searchToName = (valueInSearch) => {
    const filter = account.filter((e) =>
      e?.concept?.toLowerCase().includes(valueInSearch.toLowerCase())
    );
    setNewAccount(filter);
  };

  const filterCurrenly = (value) => {
    if (value) {
      const filter = account.filter(
        (e) => moment(e?.date).format("MM") === moment(new Date()).format("MM")
      );
      setNewAccount(filter);
      return;
    }
    setNewAccount(account);
  };

  return {
    infoRemove,
    formEdit,
    showConfirmRemoveModal,
    modalEdit,
    newAccount,
    filterCurrenly,
    submitRemove,
    onClickDelete,
    submitEdit,
    changeEdit,
    onClickEdit,
    onCloseEditModal,
    onCloseRemoveModal,
    searchToName,
  };
};

export default useDetailAccount;
