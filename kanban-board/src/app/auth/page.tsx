"use client";
import { useState } from "react";
import { useSignInEmailPassword, useSignUpEmailPassword } from "@nhost/react";
import { useAuthenticationStatus } from "@nhost/react";

export default function AuthPage() {
  const { isAuthenticated } = useAuthenticationStatus();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");

  const { signInEmailPassword, isLoading: signingIn, error: signInError } = useSignInEmailPassword();
  const { signUpEmailPassword, isLoading: signingUp, error: signUpError } = useSignUpEmailPassword();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "sign-in") {
      await signInEmailPassword(email, password);
    } else {
      await signUpEmailPassword(email, password);
    }
  };

  if (isAuthenticated) {
    return <div>✅ You are logged in!</div>;
  }

  return (
    <div style={{ maxWidth: 320, margin: "2rem auto" }}>
      <h2>{mode === "sign-in" ? "Sign In" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 8 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 8 }}
        />
        <button type="submit" style={{ width: "100%" }} disabled={signingIn || signingUp}>
          {mode === "sign-in" ? (signingIn ? "Signing in..." : "Sign In") : (signingUp ? "Signing up..." : "Sign Up")}
        </button>
        {(signInError || signUpError) && (
          <div style={{ color: "red", marginTop: 8 }}>
            {signInError?.message || signUpError?.message}
          </div>
        )}
      </form>
      <div style={{ marginTop: 12 }}>
        {mode === "sign-in" ? (
          <span>
            Don't have an account?{' '}
            <button type="button" onClick={() => setMode("sign-up")}>Sign Up</button>
          </span>
        ) : (
          <span>
            Already have an account?{' '}
            <button type="button" onClick={() => setMode("sign-in")}>Sign In</button>
          </span>
        )}
      </div>
    </div>
  );
}
