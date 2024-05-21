import React from 'react';
import './app.scss'
import RootRoute from './RootRoute';
import TransactionLoading from "./components/TransactionLoading";

const App = () => {
	return (
		<>
			<RootRoute/>
			<TransactionLoading />
		</>
	)
}

export default App;
