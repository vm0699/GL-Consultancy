import { NextResponse } from "next/server";

const SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzr_JZDw4pSdC7AS-RVk4GkCIL2JGPe3jGNOAd8xRceCRgCBDMKTtH-cO5afZTjlSZI2Q/exec";

const PHONE_REGEX = /^[6-9]\d{9}$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").replace(/\D/g, "").trim();
    const pageName = String(body?.pageName ?? "Fee Page").trim();
    const source = String(body?.source ?? "fee-lock").trim();

    // Server-side validation (must match your rules)
    if (name.length < 2) {
      return NextResponse.json({ success: false, error: "Invalid name" }, { status: 400 });
    }
    if (!PHONE_REGEX.test(phone)) {
      return NextResponse.json({ success: false, error: "Invalid phone" }, { status: 400 });
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name,
      phone,
      pageName,
      source,
    };

    // Server-to-server call (no CORS issues)
    const res = await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
    });

    const text = await res.text();
    let data: any = null;
    try {
      data = JSON.parse(text);
    } catch {}

    if (!res.ok || (data && data.success === false)) {
      return NextResponse.json(
        { success: false, error: (data && data.error) || "Sheets webhook failed", raw: text },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || "Server error" }, { status: 500 });
  }
}
