import nodemailer from "nodemailer";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",  // Replace with your SMTP service host (e.g., Gmail, SendGrid, etc.)
  port: 587,
  secure: false,  // false for port 587, true for port 465
  auth: {
    user: "catharine.huel@ethereal.email",  // Your Ethereal or other email service account
    pass: "NyKJu9TMggZrsug7Kk"
  }
});

// Handle POST requests to the /contact route
export async function POST({ request }) {
  const formData = await request.json();  // Parse the incoming JSON body

  const { name, email, message } = formData;  // Destructure the form data

  const mailOptions = {
    from: `"Contact Form" <no-reply@hackathon.com>`,  // Sender's email address (could be a no-reply address)
    to: "Client@gmail.com",  // The website owner's email address
    subject: `New Message from ${name}`,  // Subject line
    text: `Message from ${name} (${email}):\n\n${message}`,  // Plain text body
    html: `<p>Message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,  // HTML body
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Message envoyé: %s", info.messageId);  // Log message ID for debugging

    // Return success response
    return new Response(JSON.stringify({ message: "Message envoyé avec succès!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erreur dans l'envoie du mail:", error);

    // Return error response
    return new Response(JSON.stringify({ message: "Erreur dans l'envoie du mail." }), {
      status: 500,
    });
  }
}
