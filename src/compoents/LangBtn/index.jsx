import React from 'react';
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const LangBtn = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLang = () => {
    switch (i18n.language) {
      case 'en':
        i18n.changeLanguage('zh');
        break;
      case 'zh':
      default:
        i18n.changeLanguage('en');
        break;
    }
  };

  return (
    <Button color="primary" onClick={handleChangeLang}>
      {t('langNow')}
    </Button>
  );
};

export default LangBtn;
