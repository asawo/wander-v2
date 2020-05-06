import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

const Page = () => (
	<div>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
		eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
		in culpa qui officia deserunt mollit anim id est laborum.
	</div>
);

const Header = () => <h1>Header</h1>;
const Footer = () => <p>Footer</p>;

const NotFoundPage = () => (
	<div>
		404 - <NavLink to="/">Back to home</NavLink>
	</div>
);

const AppRouter = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route path="/" component={Page} exact={true} />
			<Route component={NotFoundPage} />
		</Switch>
		<Footer />
	</BrowserRouter>
);

export default AppRouter;
