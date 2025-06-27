import { NextResponse } from 'next/server';

export async function GET() {
  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:Arkar Phyo
ORG:Your Company Name
TEL;TYPE=CELL:+959123456789
EMAIL:example@email.com
URL:https://yourwebsite.com
END:VCARD
`.trim();

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="contact.vcf"',
    },
  });
}
