import * as React from 'react';
import { initAutoComplete } from './autocomplete';

import './styles.css';

export default class SearchBar extends React.Component {
  render() {
    return <div id="searchbar-autocomplete" ></div>;
  }

  componentDidMount() {
    initAutoComplete('#searchbar-autocomplete');
  }
}
