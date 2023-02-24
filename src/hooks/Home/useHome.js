import { useEffect, useState } from "react";

const useHome = (account) => {
  const [summaryAccount, setSummaryAccount] = useState(0);

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

  return {
    summaryAccount,
  };
};

export default useHome;
