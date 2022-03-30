import React from 'react';

function Error({ message }) {

	return (
		<div data-testid="errorMsg" className="error">

			<p>{message}</p>

		</div>
	);
}

export default Error;
