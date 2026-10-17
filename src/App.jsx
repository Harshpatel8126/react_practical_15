
import { useRef, useState } from "react";

export default function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [submittedUser, setSubmittedUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Retrieve values directly from the DOM
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username.trim() === "" || password === "") {
      return;
    }

    // Display username, but never reveal the actual password
    setSubmittedUser(username);

    // Clear password from the input after submission
    passwordRef.current.value = "";
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* Left Side */}
        <div className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-700 to-slate-950 text-white p-8 md:p-12 flex flex-col justify-between min-h-72">
          <div className="absolute w-64 h-64 rounded-full border border-white/10 -right-20 -top-20" />
          <div className="absolute w-48 h-48 rounded-full border border-white/10 -left-20 -bottom-20" />

          <div className="relative">
            <div className="text-2xl font-extrabold">
              ✦ Secure<span className="text-violet-300">Space</span>
            </div>

            <div className="mt-14">
              <p className="uppercase text-xs tracking-[0.25em] text-violet-200 font-bold">
                Welcome back
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
                Your world.
                <br />
                Your account.
              </h1>

              <p className="text-violet-100 mt-5 leading-7">
                Sign in to continue your journey with a simple and secure login experience.
              </p>
            </div>
          </div>

          <div className="relative mt-10 border-t border-white/20 pt-5 text-sm text-violet-200">
            🔒 Privacy-first login demonstration
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-3xl">
              🔑
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mt-5">
              Sign In
            </h2>

            <p className="text-slate-500 mt-2">
              Enter your details below to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700">
                Username
              </label>

              <input
                ref={usernameRef}
                type="text"
                placeholder="Enter your username"
                autoComplete="username"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700">
                Password
              </label>

              <input
                ref={passwordRef}
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 shadow-lg shadow-violet-200 transition"
            >
              Sign In →
            </button>
          </form>

          {/* Submission Result */}
          {submittedUser && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="font-bold text-emerald-800 text-lg">
                ✓ Form Submitted!
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <p className="text-slate-600">
                  Username:{" "}
                  <strong className="text-slate-900">
                    {submittedUser}
                  </strong>
                </p>

                <p className="text-slate-600">
                  Password:{" "}
                  <strong className="text-slate-900">
                    ••••••••
                  </strong>
                </p>
              </div>

              <p className="text-xs text-emerald-700 mt-3">
                Password retrieved for the demo and hidden for privacy.
              </p>
            </div>
          )}

          <p className="text-center text-xs text-slate-400 mt-8">
            React Practical 05 • Uncontrolled Components
          </p>
        </div>
      </div>
    </div>
  );
}
