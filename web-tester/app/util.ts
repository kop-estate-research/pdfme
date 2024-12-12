import { Template } from '@pdfme/common';
import { BasicSchema } from './constants';

const getSampleTemplate = (basePdf: any): Template => ({
  schemas: BasicSchema,
  basePdf,
});

const loadPdf = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/pdf`, {
      headers: {
        'Content-Type': 'application/pdf',
      },
    });

    if (!res.ok) return null;

    const basePdf = await res.text();

    const template = getSampleTemplate(basePdf);

    return template;
  } catch (error) {
    return null;
  }
};

export { loadPdf };
