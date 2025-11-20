// app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET(req) {

    return NextResponse.json({ message: `Hello ${name}` });
}
