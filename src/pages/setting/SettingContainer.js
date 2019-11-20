import { compose, withState } from 'recompose';

import SettingScreen from './Setting';

export default compose(
  withState('tabIndex', 'setTabIndex', 0),
  withState('tabs', 'setTabs', ['My profile', 'My team', 'Payment info']),
)(SettingScreen);
