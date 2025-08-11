"use client";
import { useSignOut, useUserData } from "@nhost/react";

export default function ProfilePage() {
  const { signOut } = useSignOut();
  const user = useUserData();

  if (!user) {
    return <div>Not signed in.</div>;
  }

  return (
    <div style={{ maxWidth: 320, margin: "2rem auto" }}>
      <h2>Profile</h2>
      <div><b>Email:</b> {user.email}</div>
      <div><b>Display Name:</b> {user.displayName || "-"}</div>
      <div><b>Id:</b> {user.id}</div>
      <button style={{ marginTop: 16 }} onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
