// Copyright IBM Corp. 2013,2017. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {expect} from 'testlab';
import * as util from 'loopback/test/support/util';

describe('Context bindings - Tagged bindings', () => {
  let ctx;
  let binding;
  before('given a context', createContext);
  before(createBinding);

  describe('Single tag', () => {
    context('when the binding is tagged', () => {
      before(tagBinding);

      it('has a tag name', () => {
        expect(binding.tagName).to.equal('qux');
      });

      function tagBinding() {
        binding.tag('qux');
      }
    });
  });

  function createContext() {
    ctx = util.getContext();
  }
  function createBinding() {
    binding = ctx.bind('foo').to('bar');
  }
});
