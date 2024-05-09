import React from "react";

const AccountName = ({ accountName }: { accountName: String }) => {
  return <div className="font-bold text-3xl">{accountName}</div>;
};

export default AccountName;
