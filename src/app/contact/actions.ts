"use server";

export type ContactState =
  | { ok: true; message: string }
  | { ok: false; message: string };

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const website = String(formData.get("company_website") ?? "").trim();
  if (website) {
    return { ok: false, message: "Unable to submit. Please try again." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length > 120) {
    return { ok: false, message: "Please enter a valid name." };
  }
  if (!email || !emailRx.test(email) || email.length > 180) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (company.length > 160) {
    return { ok: false, message: "Company name is too long." };
  }
  if (!message || message.length < 12) {
    return {
      ok: false,
      message: "Please add a bit more detail (at least 12 characters).",
    };
  }
  if (message.length > 4000) {
    return { ok: false, message: "Message is too long." };
  }

  return {
    ok: true,
    message:
      "Thanks—your message is in. We typically reply within one business day.",
  };
}
