export async function POST(req, res) {
  const { name, capital, region } = await req.json()
  return new Response((JSON.stringify({ message: `Hello ${name}` })))
}