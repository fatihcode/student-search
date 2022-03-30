import React from 'react';

function ResidentsList({ student }) {

	return (
		<ul className="list-group list-group-flush list-group-numbered" data-testid="residentsNameList">
			<h2>Residents List</h2>

			{student.map((item, i) => <li key={i} className="list-group-item"> {item} </li>)}

		</ul>
	);
}

export default ResidentsList;