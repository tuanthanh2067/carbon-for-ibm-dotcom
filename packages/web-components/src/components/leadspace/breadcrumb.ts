/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import BXBreadcrumb from 'carbon-web-components/es/components/breadcrumb/breadcrumb';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './leadspace.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Breadcrumb.
 *
 * @element dds-breadcrumb
 */
@customElement(`${ddsPrefix}-breadcrumb`)
class DDSBreadcrumb extends StableSelectorMixin(BXBreadcrumb) {
  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

export default DDSBreadcrumb;