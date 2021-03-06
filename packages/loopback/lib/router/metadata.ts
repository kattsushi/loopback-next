// Copyright IBM Corp. 2013,2017. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as assert from 'assert';
import 'reflect-metadata';

import {OpenApiSpec} from './OpenApiSpec';

/**
 * Decorate the given Controller constructor with metadata describing
 * the HTTP/REST API the Controller implements/provides.
 *
 * @param {OpenApiSpec} spec OpenAPI specification describing the endpoints
 * handled by this controller
 *
 * @decorator
 */
export function api(spec: OpenApiSpec) {
  return function(constructor: Function) {
    assert(typeof constructor === 'function',
     'The @api decorator can be applied to constructors only.');
    Reflect.defineMetadata('loopback:api-spec', spec, constructor);
  };
}

// TODO(bajtos) Add unit-tests
export function getApiSpec(constructor: Function): OpenApiSpec {
  return Reflect.getMetadata('loopback:api-spec', constructor);
}
