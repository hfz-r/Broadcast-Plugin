import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LocaleToggle';

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'en',
  },
  zh: {
    id: `${scope}.zh`,
    defaultMessage: 'zh',
  },
});
