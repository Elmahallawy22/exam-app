import React from "react";

export default function AccountSidebar() {
  return <aside className="col-span-3 bg-white p-6 flex flex-col justify-between ">
    <ul>
      <li>Profile</li>
      <li>Change Password</li>
    </ul>
    <p>Logout</p>
  </aside>;
}
