"use server";

export type QuoteState =
  | { ok: true; message: string }
  | { ok: false; message: string };

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length >= 12 && digits.startsWith("91")) {
    return digits.slice(-10);
  }
  if (digits.length >= 10) {
    return digits.slice(-10);
  }
  return "";
}

export async function submitQuoteForm(
  _prev: QuoteState | null,
  formData: FormData,
): Promise<QuoteState> {
  const trap = String(formData.get("website_url") ?? "").trim();
  if (trap) {
    return { ok: false, message: "Unable to submit. Please try again." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phoneRaw = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const timeline = String(formData.get("timeline") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();

  if (!name || name.length > 120) {
    return { ok: false, message: "Please enter a valid name." };
  }
  if (!email || !emailRx.test(email) || email.length > 180) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const phone = normalizePhone(phoneRaw);
  if (phone.length !== 10) {
    return {
      ok: false,
      message: "Please enter a valid 10-digit mobile number (8688504460 or with +91).",
    };
  }

  if (company.length > 160) {
    return { ok: false, message: "Company name is too long." };
  }
  if (!service || service.length > 80) {
    return { ok: false, message: "Please choose what you need help with." };
  }
  if (budget.length > 80 || timeline.length > 80) {
    return { ok: false, message: "Invalid selection." };
  }
  if (!details || details.length < 20) {
    return {
      ok: false,
      message: "Please describe the work in a bit more detail (at least 20 characters).",
    };
  }
  if (details.length > 6000) {
    return { ok: false, message: "Project details are too long." };
  }

  return {
    ok: true,
    message:
      "Thanks—we received your quote request. We will review and reply with questions or a ballpark within two business days.",
  };
}
