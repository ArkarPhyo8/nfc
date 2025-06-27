// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:Arkar Phyo
ORG:Your Company
TEL:+959123456789
EMAIL:example@email.com
END:VCARD
`;

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard",
      "Content-Disposition": 'attachment; filename="contact.vcf"',
    },
  });
}
