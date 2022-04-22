import React, { Component, createContext } from 'react';
import CookieService from './cookie-service';

export const CookieContext = createContext('cookies');

export default class CookiesProvider extends Component {
  static defaultProps = {
    cookieService: new CookieService()
  };

  render() {
    const { cookieService, children } = this.props;

    return (
      <CookieContext.Provider value={cookieService}>
        {children}
      </CookieContext.Provider>
    );
  }
}
