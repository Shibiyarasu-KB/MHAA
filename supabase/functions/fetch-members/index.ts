import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/12eHCryNjNnN24eTDBu5fhuZFOxPnG15Q85rZzl13KjE/export?format=csv";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const response = await fetch(SHEET_URL, { redirect: "follow" });
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet: ${response.status}`);
    }
    const csvText = await response.text();

    return new Response(csvText, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/csv; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
