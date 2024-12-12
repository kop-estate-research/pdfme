import { Size } from '@pdfme/common';
import { LeftOutlined, MinusOutlined, PlusOutlined, RightOutlined } from './icons';
import { CSSProperties } from 'react';

const ButtonStyle: CSSProperties = {
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer',
};

type TextStyle = { color: string; fontSize: number; margin: number };

type ZoomProps = {
  zoomLevel: number;
  setZoomLevel: (zoom: number) => void;
  style: { textStyle: TextStyle };
};

const Zoom = ({ zoomLevel, setZoomLevel, style }: ZoomProps) => {
  const zoomStep = 0.25;
  const maxZoom = 2;
  const minZoom = 0.25;

  const nextZoomOut = zoomLevel - zoomStep;
  const nextZoomIn = zoomLevel + zoomStep;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        disabled={minZoom >= nextZoomOut}
        style={ButtonStyle}
        onClick={() => setZoomLevel(nextZoomOut)}
      >
        <MinusOutlined style={{ color: style.textStyle.color }} />
      </button>
      <p style={style.textStyle}>{Math.round(zoomLevel * 100)}%</p>
      <button
        disabled={maxZoom < nextZoomIn}
        style={ButtonStyle}
        onClick={() => setZoomLevel(nextZoomIn)}
      >
        <PlusOutlined style={{ color: style.textStyle.color }} />
      </button>
    </div>
  );
};

type PagerProps = {
  pageCursor: number;
  pageNum: number;
  setPageCursor: (page: number) => void;
  style: { textStyle: TextStyle };
};

const Pager = ({ pageCursor, pageNum, setPageCursor, style }: PagerProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        disabled={pageCursor <= 0}
        style={ButtonStyle}
        onClick={() => setPageCursor(pageCursor - 1)}
      >
        <LeftOutlined style={{ color: style.textStyle.color }} />
      </button>
      <p style={style.textStyle}>
        {pageCursor + 1}/{pageNum}
      </p>
      <button
        disabled={pageCursor + 1 >= pageNum}
        style={ButtonStyle}
        onClick={() => setPageCursor(pageCursor + 1)}
      >
        <RightOutlined style={{ color: style.textStyle.color }} />
      </button>
    </div>
  );
};

type CtlBarProps = {
  size: Size;
  pageCursor: number;
  pageNum: number;
  setPageCursor: (page: number) => void;
  zoomLevel: number;
  setZoomLevel: (zoom: number) => void;
};

const textStyle = {
  color: 'white',
  fontSize: 11,
  margin: 1,
};

const CtlBar = (props: CtlBarProps) => {
  const barWidth = 300;
  const { size, pageCursor, pageNum, setPageCursor, zoomLevel, setZoomLevel } = props;
  const width = pageNum > 1 ? barWidth : barWidth / 2;

  return (
    <div style={{ position: 'absolute', top: 'auto', bottom: '6%', width: size.width }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
          left: `calc(50% - ${width / 2}px)`,
          width,
          height: 40,
          boxSizing: 'border-box',
          padding: 1,
          borderRadius: '10px',
          backgroundColor: 'black',
        }}
      >
        {pageNum > 1 && (
          <Pager
            style={{ textStyle }}
            pageCursor={pageCursor}
            pageNum={pageNum}
            setPageCursor={setPageCursor}
          />
        )}
        <Zoom style={{ textStyle }} zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
      </div>
    </div>
  );
};

export default CtlBar;
