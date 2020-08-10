import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles'
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const OrderConfirmationPage = lazy(() => import('./pages/order-confirmation/order-confirmation.component'));
const PlantInfo = lazy(() => import('./components/plant-info/plant-info.component'));


const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route exact path='/checkout' component={CheckoutPage} />
                        <Route exact path='/checkout/confirmation' component={OrderConfirmationPage} />
                        <Route exact path='/catalog/:plant' component={PlantInfo} />
                        {/* <Route
                            exact
                            path='/signin'
                            render={() =>
                                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
                            }
                        /> */}
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
};

export default App;