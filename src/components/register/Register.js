import React, { useState } from "react";

import MemberRegister from "./MemberRegister";
import AccountType from "./AccountType";

function Register() {
  const [accType, setAccType] = useState(0);

  function selectAccType(type) {
    setAccType(type);
  }

  return (
    <div className="flex flex-col justify-between mt-24 max-w-xl mx-auto">
      <AccountType selectedAccType={selectAccType} />
      {accType ? <MemberRegister accType={accType} /> : null}
    </div>
  );
}

export default Register;
