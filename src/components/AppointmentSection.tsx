"use client";

import { useState } from "react";

export default function AppointmentSection() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setDone(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      studentClass: formData.get("studentClass") as string,
      interest: formData.get("interest") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "Something went wrong. Try again.");
      } else {
        setDone(true);
        form.reset();
      }
    } catch {
      setError("Unable to reach server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Book a free appointment
        </h2>
        <p className="mt-2 text-sm text-[#4a5568] max-w-xl">
          Share your basic details and our counsellor will call or WhatsApp you
          within 24 hours to understand your marks, budget, and course
          interests. No charges for the first call.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 rounded-3xl border border-amber-200 bg-white p-5 shadow-md text-sm"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-xs text-[#4a5568] font-medium">
                Student name *
              </label>
              <input
                name="name"
                required
                className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-[#1e2749] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-[#4a5568] font-medium">
                WhatsApp number *
              </label>
              <input
                name="phone"
                required
                className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-[#1e2749] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                placeholder="+916000786006"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-xs text-[#4a5568] font-medium">
                Current class / status
              </label>
              <select
                name="studentClass"
                className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-[#1e2749] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              >
                <option value="">Select</option>
                <option>12th appearing</option>
                <option>12th passed</option>
                <option>Graduate</option>
                <option>Working professional</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-[#4a5568] font-medium">
                Course interest
              </label>
              <select
                name="interest"
                className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-[#1e2749] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              >
                <option value="">Select</option>
                <option>Engineering</option>
                <option>Commerce / Management</option>
                <option>Arts &amp; Science</option>
                <option>MBA / PGDM</option>
                <option>Allied Health / Nursing</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs text-slate-300">
              Anything we should know? (budget, location, marks)
            </label>
            <textarea
              name="message"
              rows={3}
              className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-[#1e2749] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder="Example: 12th board marks, preferred area in Chennai, hostel needed, budget per year..."
            />
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}
          {done && (
            <p className="text-xs text-amber-700 bg-amber-50 p-2 rounded-lg">
              Thank you! We’ve received your request. Our team will contact you
              within 24 hours.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70 shadow-md"
          >
            {loading ? "Submitting..." : "Submit request"}
          </button>
        </form>
      </div>

      <div className="space-y-4 text-xs text-[#4a5568]">
        <div className="rounded-3xl border border-amber-200 bg-white p-4 shadow-md">
          <h3 className="text-sm font-semibold text-[#1e2749]">
            What happens after you submit?
          </h3>
          <ol className="mt-3 space-y-2 list-decimal list-inside">
            <li>We verify your details.</li>
            <li>Our counsellor connects on call / WhatsApp.</li>
            <li>
              You receive a short-listed set of colleges and next steps for seat
              booking.
            </li>
          </ol>
        </div>

        <div className="rounded-3xl border border-amber-200 bg-white p-4 shadow-md">
          <h3 className="text-sm font-semibold text-[#1e2749]">
            Prefer direct WhatsApp?
          </h3>
          <p className="mt-2">
            You can also message us directly on WhatsApp at{" "}
            <span className="font-semibold text-amber-600">
              +91-6000786006
            </span>{" "}
            (placeholder – we’ll change this later).
          </p>
        </div>
      </div>
    </div>
  );
}
