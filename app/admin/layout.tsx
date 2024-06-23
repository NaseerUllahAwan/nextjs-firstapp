import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="bg-green-300 h-96">
      This green is the whole layout of admin
      <div className="flex">
        <aside className="bg-slate-200 p-5 mr-5">Admin Sidebar</aside>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
