// Flattening in this context is the process of converting a nested object into a single-level object.
// This implementation recursively traverses the object, creating new keys that represent the path to each value using dot notation.
// The result is a flat structure where complex nested data is represented by keys like "parent.child.grandchild",

import { Template } from '@pdfme/common';

const getSampleTemplate = (basePdf: any): Template => ({
  schemas: [{}],
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
