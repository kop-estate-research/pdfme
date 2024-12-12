import { useEffect, useRef } from 'react';
import { loadPdf } from './util';
import { PDF_PLUGINS_LIST } from './constants';
import { Form } from '@pdfme/ui';

const useForm = (formRef: React.MutableRefObject<HTMLDivElement | null>) => {
  const form = useRef<Form | null>(null);

  useEffect(() => {
    loadPdf().then((template) => {
      if (!template) return;
      if (!formRef.current || form.current !== null) return;

      try {
        form.current = new Form({
          domContainer: formRef.current!!,
          template,
          inputs: [{}],
          plugins: PDF_PLUGINS_LIST,
        });
      } catch (ex) {
        console.log(ex);
      }
    });

    return () => {
      form.current?.destroy();
      form.current = null;
    };
  }, []);

  return form.current;
};

export default useForm;
