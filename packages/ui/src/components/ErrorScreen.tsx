import { useContext } from 'react';
import { Size } from '@pdfme/common';
import { I18nContext } from '../contexts';
import { BACKGROUND_COLOR } from '../constants';

const ErrorScreen = ({ size, error }: { size: Size; error: Error }) => {
  const i18n = useContext(I18nContext);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: BACKGROUND_COLOR,
        ...size,
      }}
    >
      <div style={{ width: 300, margin: '0 auto', background: 'white' }}>
        <h3>{i18n('errorOccurred')}</h3>
        <h4>{error.message}</h4>
      </div>
    </div>
  );
};

export default ErrorScreen;
