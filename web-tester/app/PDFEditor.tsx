'use client';

import useForm from './useForm';
import { FC, PropsWithChildren, useRef } from 'react';

const PDFEditor: FC<PropsWithChildren> = ({ children }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useForm(formRef);

  return <div ref={formRef} />;
};

export default PDFEditor;
