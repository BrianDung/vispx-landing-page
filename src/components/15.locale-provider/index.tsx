import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import jaJP from 'antd/locale/ja_JP';
import zhCN from 'antd/locale/zh_CN';
import vi from 'antd/locale/vi_VN';
import { AnyAaaaRecord } from 'dns';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_CODE } from 'src/constants';

interface Props {
  children: any;
}

const switchLanguage = (language: AnyAaaaRecord) => {
  switch (language) {
    case LANGUAGE_CODE.ENGLISH:
      return enUS;

    case LANGUAGE_CODE.CHINESE:
      return zhCN;

    case LANGUAGE_CODE.JAPANESE:
      return jaJP;

    case LANGUAGE_CODE.VIETNAMESE:
      return vi;

    default:
      return enUS;
  }
};

const LocaleProviderComponent: React.FC<Props> = ({ children }) => {
  const { i18n } = useTranslation();

  const [locale, setLocale] = useState(switchLanguage(i18n.resolvedLanguage as any));

  useEffect(() => {
    setLocale(switchLanguage(i18n.resolvedLanguage as any));
  }, [i18n.resolvedLanguage]);

  return <ConfigProvider locale={locale}>{children}</ConfigProvider>;
};

export default LocaleProviderComponent;
