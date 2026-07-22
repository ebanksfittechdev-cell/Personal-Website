export async function handler(event) {
  const data = JSON.parse(event.body);

  const res = await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    body: new URLSearchParams({
      token: process.env.PUSHOVER_APP_TOKEN,
      user: process.env.PUSHOVER_USER_KEY,
      title: "New Contact Form Submission",
      message: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ success: res.ok })
  };
}
