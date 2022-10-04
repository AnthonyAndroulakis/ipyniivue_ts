// Copyright (c) anthony
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import { MODULE_NAME, MODULE_VERSION } from './version';

import { Niivue } from '@niivue/niivue';

// Import the CSS
//import '../css/widget.css';

export class NiivueModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: NiivueModel.model_name,
      _model_module: NiivueModel.model_module,
      _model_module_version: NiivueModel.model_module_version,
      _view_name: NiivueModel.view_name,
      _view_module: NiivueModel.view_module,
      _view_module_version: NiivueModel.view_module_version,
      volumes: [],
      height: 300
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'NiivueModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'NiivueView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class NiivueView extends DOMWidgetView {
  private _canvas: HTMLCanvasElement;
  private _nv: any;

  render() {
    this._canvas = document.createElement('canvas');
    this.el.appendChild(this._canvas);
    this.el.classList.add('custom-widget');

    this._nv = new Niivue();
    this._nv.attachToCanvas(this._canvas);

    this.volumes_changed();
    this.height_changed();
    
    this.model.on('change:volumes', this.volumes_changed, this);
    this.model.on('change:height', this.height_changed, this);
    
    //const ctx = this._canvas.getContext('2d');
    //ctx.fillStyle = "rgb(200, 0, 0)";
    //ctx.fillRect(10, 10, 50, 50);
  }

  volumes_changed() {
    this._nv.loadVolumes(this.model.get('volumes'));
  }

  height_changed() {
    this._canvas.height = this.model.get('height');
  }
}
