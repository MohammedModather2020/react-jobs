import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      home: 'Home',
      jobs: 'Jobs',
      'job-list': 'Job List',
      'job-details': 'Job Details',
      'job-title': 'Job Title',
      'job-category': 'Job Category',
      'job-type': 'Job Type',
      'dont-have-jobs': "Don't Have Any jobs",
      "search-jobs": "Search Jobs",
      'next': 'Next',
      'previous': 'Previous',
      'search': 'Search',

    }
  },
  ar: {
    translation: {
      home: 'الرئيسية',
      jobs: 'وظائف',
      'job-list': 'قائمة الوظائف',
      'job-details': 'تفاصيل الوظيفة',
      'job-title': 'عنوان الوظيفة',
      'job-category': 'فئة الوظيفة',
      'job-type': 'نوع الوظيفة',
      'dont-have-jobs': "لا يوجد وظائف",
      "search-jobs": "ابحث عن وظائف",
      'next': 'التالي',
      'previous': 'السابق',
      'search': 'بحث',

    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
});

export default i18n;