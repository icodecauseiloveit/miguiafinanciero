"use server";

export async function submitLeadToN8n(payload: any) {
  const url = process.env.N8N_WEBHOOK_URL;
  
  if (!url) {
    console.error("No N8N_WEBHOOK_URL configured in .env");
    return { success: false, error: "Missing config" };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error(`Webhook responded with status: ${res.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to submit to webhook:", error);
    return { success: false, error: String(error) };
  }
}
