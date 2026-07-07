"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/button";
import { inputClasses } from "@/components/form-field";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim() || null,
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const supabase = createClient();
      const { error } = await supabase.from("contact_submissions").insert(payload);

      if (error) {
        setStatus("error");
        setErrorMessage(error.message);
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-card)] border border-brand-border bg-brand-surface p-6 text-center">
        <p className="text-base font-semibold text-brand-secondary">
          Thanks — we&apos;ll be in touch shortly.
        </p>
        <p className="mt-1 text-sm text-brand-muted">
          A member of the Argus team will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-brand-secondary">
            Name
          </label>
          <input id="name" name="name" required className={`mt-1.5 ${inputClasses}`} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-brand-secondary">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-1.5 ${inputClasses}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium text-brand-secondary">
          Company
        </label>
        <input id="company" name="company" className={`mt-1.5 ${inputClasses}`} />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand-secondary">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`mt-1.5 ${inputClasses}`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
