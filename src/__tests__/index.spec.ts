// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

// Add any needed widget imports here (or from controls)
// import {} from '@jupyter-widgets/base';

import { createTestModel } from './utils';

import { NiivueModel } from '..';

describe('Example', () => {
  describe('NiivueModel', () => {
    it('should be createable', () => {
      const model = createTestModel(NiivueModel);
      expect(model).toBeInstanceOf(NiivueModel);
      expect(model.get('text_height')).toEqual(0.06);
    });

    it('should be createable with a value', () => {
      const state = { text_height: 0.05 };
      const model = createTestModel(NiivueModel, state);
      expect(model).toBeInstanceOf(NiivueModel);
      expect(model.get('text_height')).toEqual(0.05);
    });
  });
});
