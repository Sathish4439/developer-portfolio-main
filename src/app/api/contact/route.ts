import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, projectType, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Try EmailJS API first if available
    try {
      const emailJsRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_0g4rqak",
          template_id: "template_sgzh5es",
          user_id: "7zCZqx6cwcEbqWaOL",
          template_params: {
            from_name: name,
            from_email: email,
            name,
            email,
            role,
            project_type: projectType,
            subject,
            message,
            reply_to: email,
          },
        }),
      });

      if (emailJsRes.ok) {
        return NextResponse.json({ success: true, provider: "EmailJS" });
      }
    } catch {
      // Ignore and proceed to FormSubmit fallback
    }

    // 2. FormSubmit Fallback API
    const formSubmitRes = await fetch("https://formsubmit.co/ajax/aravindsathish0885@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `[Portfolio Contact] ${subject || "New Inquiry from " + name}`,
        _template: "table",
        _cc: "sathishg.dev@gmail.com",
        Name: name,
        Email: email,
        Role: role,
        ProjectType: projectType,
        Subject: subject,
        Message: message,
      }),
    });

    const formSubmitData = await formSubmitRes.json().catch(() => ({}));

    if (formSubmitRes.ok && formSubmitData.success !== "false") {
      return NextResponse.json({ success: true, provider: "FormSubmit" });
    }

    // 3. Web3Forms Free Backup API
    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "08b53051-9bf6-4fb4-814d-91b7e4ef4ed7", // Web3Forms public endpoint
        subject: `[Portfolio Inquiry] ${subject || "New Message from " + name}`,
        from_name: name,
        email: email,
        name: name,
        role: role,
        projectType: projectType,
        message: `Role: ${role}\nProject Type: ${projectType}\nMessage:\n${message}`,
        to_email: "aravindsathish0885@gmail.com",
      }),
    });

    if (web3Res.ok) {
      return NextResponse.json({ success: true, provider: "Web3Forms" });
    }

    return NextResponse.json(
      { success: false, error: "Failed to send email. Please email sathishg.dev@gmail.com directly." },
      { status: 500 }
    );
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ success: false, error: error.message || "Internal server error" }, { status: 500 });
  }
}
