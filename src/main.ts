import App from './Content/MainContent.svelte';
import { items, categories } from './getDataFromDom';
import Searchbar from './Sidebar/SidebarSearch.svelte';
import Categories from './Sidebar/SidebarCategories.svelte';

const getActiveCategoryFromUrl = () => {
  const pathname = window.location.pathname;
  if (pathname.startsWith('/category/')) {
    return pathname.replace('/category/', '').split('/')[0];
  }
  return null;
};

const getIsFeaturedList = () => {
  const pathname = window.location.pathname;
  return pathname === '/templates-featured';
};

// on page load, this gets populated
const activeCategory = getActiveCategoryFromUrl();
const isFeaturedList = getIsFeaturedList();

const content = document.getElementById('ss-content');
if (content) {
  var app = new App({
    target: document.getElementById('ss-content'),
    props: {
      items,
      activeCategory,
      isFeaturedList,
      categories,
    },
  });
}

/**
 * Initialize searchbar
 */
const searchEl = document.getElementById('ss-search');
if (searchEl) {
  new Searchbar({
    target: searchEl,
  });
}

/**
 * initialize category list
 */
const categoriesTargetEl = document.getElementById('ss-category-list');
if (categoriesTargetEl) {
  new Categories({
    target: categoriesTargetEl,
    props: {
      categories,
    },
  });
}
/**
 * initialize mobile category list
 */
const categoriesMobileTargetEl = document.getElementById(
  'ss-category-list-mobile'
);
if (categoriesTargetEl) {
  new Categories({
    target: categoriesMobileTargetEl,
    props: {
      categories,
    },
  });
}

export default app;
