/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 2022-06-13 21:11:41
 * @LastEditors: 吴俊杰 20717@etransfar.com
 * @LastEditTime: 2022-06-14 09:02:03
 * @FilePath: /个人工作/react-debugger/src/react/v18/react-reconciler/src/ReactFiberHostConfig.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-disable react-internal/prod-error-codes */

// We expect that our Rollup, Jest, and Flow configurations
// always shim this module with the corresponding host config
// (either provided by a renderer, or a generic shim for npm).
//
// We should never resolve to this file, but it exists to make
// sure that if we *do* accidentally break the configuration,
// the failure isn't silent.

// throw new Error('This module must be shimmed by a specific renderer.');
export * from "./forks/ReactFiberHostConfig.dom";
