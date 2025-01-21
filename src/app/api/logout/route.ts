import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = cookies();
  (await cookieStore).delete("token"); // Delete the "token" cookie

  return NextResponse.json({ message: "Logged out successfully" }, { status: 200 });
}
