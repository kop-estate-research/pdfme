import type { Plugin } from '@pdfme/common';
import { text } from '@pdfme/schemas';
import { uiRender } from './ui';
import { TextSchema } from '../../../../packages/schemas/dist/types/src/text/types';

const type = 'PROPERTY_PRO_READ_ONLY';

const readOnly: Plugin<TextSchema> = {
  ui: uiRender, // disabled in edit mode
  pdf: text.pdf,
  propPanel: {
    schema: {},
    defaultValue: '',
    defaultSchema: {
      ...text.propPanel.defaultSchema,
      type,
      content: '',
      position: { x: 0, y: 0 },
      width: 62.5,
      height: 37.5,
    },
  },
};

export default readOnly;
