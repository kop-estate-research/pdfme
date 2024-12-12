import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Assuming the PDF is in the public directory
const PDF_PATH = join(process.cwd(), 'public', 'test.pdf');

export async function GET() {
  try {
    // Read the PDF file from the local filesystem
    const pdfBuffer = await readFile(PDF_PATH);

    // Convert to base64
    const base64String = pdfBuffer.toString('base64');
    const formatted = `data:application/pdf;base64,${base64String}`;

    return new NextResponse(formatted, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error reading PDF:', error);

    return new NextResponse(
      JSON.stringify({
        message: 'Internal Server Error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
