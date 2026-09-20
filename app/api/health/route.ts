export const dynamic = "force-dynamic";
export function GET() {
  const configured =
    !!process.env.TYPESAFE_API_KEY?.trim() ||
    !!process.env.OPENROUTER_API_KEY?.trim();
  return Response.json(
    { ok: true, configured },
    { headers: { "Cache-Control": "no-store" } },
  );
}
