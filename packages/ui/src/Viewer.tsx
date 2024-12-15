import { createRoot } from 'react-dom/client';
import { PreviewProps } from '@pdfme/common';
import { PreviewUI } from './class';
import { DESTROYED_ERR_MSG } from './constants.js';
import Preview from './components/Preview';
import AppContextProvider from './components/AppContextProvider';

class Viewer extends PreviewUI {
  private root: any = null;

  constructor(props: PreviewProps) {
    super(props);

    if (!this.root) {
      if (!this.domContainer) throw Error(DESTROYED_ERR_MSG);
      this.root = createRoot(this.domContainer);
    }

    this.render();
  }

  protected render() {
    this.root.render(
      <AppContextProvider
        lang={this.getLang()}
        font={this.getFont()}
        plugins={this.getPluginsRegistry()}
        options={this.getOptions()}
      >
        <Preview template={this.template} size={this.size} inputs={this.inputs} />
      </AppContextProvider>
    );
  }

  destroy() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }

    super.destroy();
  }
}

export default Viewer;
