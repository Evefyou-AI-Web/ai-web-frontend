import { resolve } from 'path';

/**
 * less global variable
 */
export function generateModifyVars(dark = false) {


  return {
    hack: `true; @import (reference) "${resolve('src/styles/variables/index.less')}";`,
    'primary-color': '#1890ff',
  };
}
