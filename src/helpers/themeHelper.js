/**
 * @file theme helper
 * @description Helper methods for theme stuff
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import config from '../config';

const themeHelper = {
  getTheme
};

export default themeHelper;

function getTheme() {

  return config.theme;

}
