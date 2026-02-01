import { NextRequest, NextResponse } from "next/server";

// Phone validation regex: Indian mobile numbers (10 digits, starts with 6-9)
const PHONE_REGEX = /^[6-9]\d{9}$/;

interface FeeLeadData {
    name: string;
    phone: string;
    pageName: string;
    source: string;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, phone, pageName, source } = body as FeeLeadData;

        // Server-side validation
        if (!name || typeof name !== "string" || name.trim().length < 2) {
            return NextResponse.json(
                { success: false, error: "Name must be at least 2 characters" },
                { status: 400 }
            );
        }

        if (!phone || typeof phone !== "string" || !PHONE_REGEX.test(phone)) {
            return NextResponse.json(
                { success: false, error: "Please enter a valid 10-digit Indian phone number" },
                { status: 400 }
            );
        }

        // Generate timestamp
        const timestamp = new Date().toISOString();

        // Data to be sent
        const leadData = {
            timestamp,
            name: name.trim(),
            phone,
            pageName: pageName || "Fee Page",
            source: source || "fee-lock",
        };

        // Send to Google Sheets via Web App URL
        const googleSheetsUrl = process.env.GOOGLE_SHEETS_URL;
        if (googleSheetsUrl) {
            try {
                const sheetsResponse = await fetch(googleSheetsUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(leadData),
                });

                if (!sheetsResponse.ok) {
                    console.error("Google Sheets error:", await sheetsResponse.text());
                }
            } catch (sheetError) {
                console.error("Failed to send to Google Sheets:", sheetError);
                // Don't fail the request if sheets fails - just log it
            }
        } else {
            console.log("GOOGLE_SHEETS_URL not configured. Logging data:", leadData);
        }

        // Optional: Send to webhook if configured
        const webhookUrl = process.env.WEBHOOK_URL;
        if (webhookUrl) {
            try {
                await fetch(webhookUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(leadData),
                });
            } catch (webhookError) {
                console.error("Failed to send to webhook:", webhookError);
                // Don't fail the request if webhook fails
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Fee-lock API error:", error);
        return NextResponse.json(
            { success: false, error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
