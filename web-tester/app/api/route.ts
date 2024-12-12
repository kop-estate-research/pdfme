import { NextResponse } from 'next/server';

export const runtime = 'edge';

const companyId = 3; // NOTE: only Kopanitsanos

const rawUrl = 'https://d1o8f6oijbfd0m.cloudfront.net/ca_template';

const getPDFUrl = () => `${rawUrl}_${companyId}_BASIC_en.pdf`;

export default async function POST() {
  try {
    const result = await fetch(getPDFUrl(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    });

    if (!result.ok) {
      throw new Error('Failed to fetch the PDF file');
    }

    const arrayBuffer = await result.arrayBuffer();
    const base64String = Buffer.from(arrayBuffer).toString('base64');
    const formatted = `data:application/pdf;base64,${base64String}`;

    return new NextResponse(formatted, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);

    return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
