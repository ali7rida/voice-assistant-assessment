export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const response = await fetch('https://ali7rida.app.n8n.cloud/webhook/24fb26f5-3e96-4fb5-9685-1671771faed2', {
      method: 'POST', 
      headers: { 'content-type': req.headers['content-type'] },
      body: req,
      duplex: 'half',
    });
    const data = await response.text();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}