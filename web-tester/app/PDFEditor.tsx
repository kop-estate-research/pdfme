'use client';

import useForm from './useForm';
import { useRef } from 'react';

const PDFEditor = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useForm(formRef);

  return <div ref={formRef} />;
};

export default PDFEditor;
