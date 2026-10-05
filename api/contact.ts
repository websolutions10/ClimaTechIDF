// Fonction serverless Vercel : POST /api/contact
// Variables d'environnement Vercel : RESEND_API_KEY (obligatoire)
// CONTACT_TO_EMAIL (optionnel, par défaut l'adresse de test), CONTACT_FROM_EMAIL (optionnel)

const TEST_RECIPIENT = 'ilanrieupeyroux@gmail.com';

// Accès aux variables d'environnement sans dépendre de @types/node
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env: Record<string, string | undefined> = (globalThis as any).process?.env ?? {};

const escapeHtml = (text: string) =>
text.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m] as string));

const PROJECT_LABELS: Record<string, string> = {
installation: 'Installation neuve',
remplacement: 'Remplacement',
maintenance: 'Maintenance',
depannage: 'Dépannage',
autre: 'Autre',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
if (req.method !== 'POST') {
res.setHeader('Allow', 'POST');
return res.status(405).json({ error: 'Méthode non autorisée' });
}

const apiKey = env.RESEND_API_KEY;
if (!apiKey) {
return res.status(500).json({ error: "Service d'envoi non configuré (RESEND_API_KEY manquante)" });
}

const data = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
const { name, email, phone, subject, projectType, message } = data;

if (!name || !email || !projectType || !message) {
return res.status(400).json({ error: 'Champs obligatoires manquants' });
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
return res.status(400).json({ error: 'Adresse email invalide' });
}

const to = env.CONTACT_TO_EMAIL || TEST_RECIPIENT;
const from = env.CONTACT_FROM_EMAIL || 'Climatec IDF <onboarding@resend.dev>';
const label = PROJECT_LABELS[projectType] || projectType;

try {
const response = await fetch('https://api.resend.com/emails', {
method: 'POST',
headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
body: JSON.stringify({
from,
to: [to],
reply_to: email,
subject: `Nouvelle demande de devis : ${label}`,
html: `
<div style="font-family: Arial, sans-serif; max-width: 600px;">
<h2>Nouvelle demande de devis</h2>
<p><strong>Nom :</strong> ${escapeHtml(String(name))}</p>
<p><strong>Email :</strong> ${escapeHtml(String(email))}</p>
${phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(String(phone))}</p>` : ''}
<p><strong>Type de projet :</strong> ${escapeHtml(String(label))}</p>
${subject ? `<p><strong>Objet :</strong> ${escapeHtml(String(subject))}</p>` : ''}
<p><strong>Message :</strong></p>
<p>${escapeHtml(String(message)).replace(/\n/g, '<br>')}</p>
</div>`,
}),
});

if (!response.ok) {
console.error('Resend error', response.status, await response.text());
return res.status(502).json({ error: "L'envoi du mail a échoué" });
}
return res.status(200).json({ success: true });
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Erreur serveur' });
}
}
