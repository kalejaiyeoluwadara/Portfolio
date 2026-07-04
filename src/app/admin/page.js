"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [fetchError, setFetchError] = useState("");

  const loadMessages = async () => {
    setFetchError("");
    const res = await fetch("/api/contact");
    if (res.status === 401) {
      setAuthed(false);
      return;
    }
    if (!res.ok) {
      setFetchError("Couldn't load submissions.");
      return;
    }
    const data = await res.json();
    setMessages(data.messages);
    setAuthed(true);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setLoginError(data.error || "Login failed");
        return;
      }
      setPassword("");
      await loadMessages();
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setMessages([]);
  };

  if (!authed) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col justify-center px-5">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <h1 className="font-display text-2xl">Admin login</h1>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border-b border-line bg-transparent py-3 text-[15px] outline-none focus:border-cobalt"
          />
          {loginError && (
            <p className="font-mono text-[12px] text-red-400">{loginError}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-coal px-6 py-3 text-[14px] font-semibold text-paper disabled:opacity-50 dark:bg-cream dark:text-ink"
          >
            {loading ? "Checking…" : "Log in"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-[900px] px-5 py-16 sm:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-display text-2xl">Submissions</h1>
        <button
          onClick={handleLogout}
          className="font-mono text-[12px] text-muted hover:text-cobalt"
        >
          Log out
        </button>
      </div>

      {fetchError && (
        <p className="font-mono text-[12px] text-red-400">{fetchError}</p>
      )}

      {messages.length === 0 ? (
        <p className="font-mono text-[13px] text-muted">No submissions yet.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-line">
          {messages.map((m) => (
            <li key={m._id} className="flex flex-col gap-1 py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium">{m.name}</span>
                <span className="font-mono text-[11px] text-muted">
                  {new Date(m.createdAt).toLocaleString()}
                </span>
              </div>
              <a
                href={`mailto:${m.email}`}
                className="font-mono text-[12px] text-cobalt"
              >
                {m.email}
              </a>
              <p className="mt-2 whitespace-pre-wrap text-[14px] text-muted">
                {m.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
