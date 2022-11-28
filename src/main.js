/**
 * san-store
 * Copyright 2017 Baidu Inc. All rights reserved.
 *
 * @file 主模块
 * @author errorrik
 */

import Store from './store';
import store from './default-store';
import createConnector from './connect/createConnector';
import createSanConnector from './connect/createSanConnector';


/**
 * 版本号
 *
 * @type {string}
 */
export let version = '2.1.3';

export {Store, store};

export let connect = {
    san: createConnector(store),
    createConnector
};

export let sanConnector = createSanConnector(store);

