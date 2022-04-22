import React, { Component } from 'react';
import { CookieContext } from './cookie-context';

export default function cookieWrapper(ComposedComponent) {
    return class extends Component {
        render() {
            return (
                <CookieContext.Consumer>
                    {cookieService => (
                        <ComposedComponent
                            cookies={cookieService.getAll()}
                            setCookie={cookieService.set.bind(cookieService)} //TODO .bind() ?
                            {...this.props} />
                    )}
                </CookieContext.Consumer>
            );
        }
    };
}