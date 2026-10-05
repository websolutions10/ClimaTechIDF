import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  projectType: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data: ContactRequest = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.projectType || !data.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Send email to contact
    const contactEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "noreply@climatec.fr",
        to: "climatecidf@gmail.com",
        reply_to: data.email,
        subject: `Nouvelle demande de contact: ${data.projectType}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2>Nouvelle demande de contact</h2>
            <p><strong>Nom:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            ${data.phone ? `<p><strong>Téléphone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
            <p><strong>Type de projet:</strong> ${escapeHtml(data.projectType)}</p>
            ${data.subject ? `<p><strong>Objet:</strong> ${escapeHtml(data.subject)}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
          </div>
        `,
      }),
    });

    if (!contactEmailResponse.ok) {
      throw new Error("Failed to send admin email");
    }

    // Send confirmation email to user
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "noreply@climatec.fr",
        to: data.email,
        subject: "Demande de contact reçue - Climatec",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2>Merci pour votre demande</h2>
            <p>Bonjour ${escapeHtml(data.name)},</p>
            <p>Nous avons bien reçu votre demande de contact. Notre équipe vous recontactera dans les 24 heures pour discuter de votre projet.</p>
            <p style="margin-top: 30px; color: #666; font-size: 12px;">
              Climatec - Dépannage et maintenance climatisation<br>
              Zone d'intervention: Île-de-France
            </p>
          </div>
        `,
      }),
    }).catch(() => {
      // Silent fail on confirmation email
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Internal server error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
