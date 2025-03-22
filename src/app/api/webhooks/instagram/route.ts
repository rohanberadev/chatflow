import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const hub = request.nextUrl.searchParams.get("hub.challenge");

  return NextResponse.json({ hub }, { status: 200 });
}
