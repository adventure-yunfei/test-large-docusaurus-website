import * as React from 'preact';
import { autocomplete } from '@algolia/autocomplete-js';

import '@algolia/autocomplete-theme-classic';
import './styles.css';

export function initAutoComplete(containerId) {
  const SEARCH_INDICES = window.SEARCH_INDICES || [];

  autocomplete({
    container: containerId,

    placeholder: '搜索...',

    getSources({ query }) {
      if (query.length === 0) {
        return [];
      }

      const lowerCaseQuery = query.toLowerCase();
      const indexItems = SEARCH_INDICES
        .filter(item => item.searchKey.indexOf(lowerCaseQuery) !== -1);
      const indexItemsByCategory = new Map();
      indexItems.forEach((indexItem) => {
        let indexItemsOfCategory = indexItemsByCategory.get(indexItem.category);
        if (indexItemsOfCategory === undefined) {
          indexItemsOfCategory = [];
          indexItemsByCategory.set(indexItem.category, indexItemsOfCategory);
        }
        indexItemsOfCategory.push(indexItem);
      });

      return Array.from(indexItemsByCategory.entries()).map(([category, items]) => {
        return {
          sourceId: category,
          getItems() {
            return items;
          },
          onSelect({ item }) {
            location.href = item.url;
          },
          templates: {
            header({ items }) {
              return (
                <>
                  <span className="aa-SourceHeaderTitle">{category}</span>
                  <div className="aa-SourceHeaderLine" />
                </>
              );
            },
            item({ item }) {
              return item.fullPathTitle;
            },
          },
        };
      });
    },
  });
}
