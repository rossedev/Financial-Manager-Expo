import { useEffect, useState } from "react";
import { database } from "../config/fb";
import { collection, onSnapshot, query } from "firebase/firestore";

export const useAccount = () => {
  const [account, setAccount] = useState([]);

  useEffect(() => {
    accountList();
  }, []);

  const accountList = () => {
    const collectionRef = collection(database, "accounts");
    const q = query(collectionRef);

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setAccount(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          concept: doc.data().concept,
          value: doc.data().value,
          type: doc.data().type,
          date: doc.data().date.toDate(),
        }))
      );
      return unsuscribe;
    });
  };

  return {
    account,
  };
};
