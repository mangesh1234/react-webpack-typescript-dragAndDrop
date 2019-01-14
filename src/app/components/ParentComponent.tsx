import * as React from 'react';

import DropDownList from './DropDownList';
import Table from './Table';

export default class ParentComponent extends React.Component<any, any>{

	state = {
		information: [{ "id": 1, "first_name": "Alta", "last_name": "Russel", "email": "arussel0@mayoclinic.com", "gender": "Female", "ip_address": "253.102.193.30" },
		{ "id": 2, "first_name": "Zackariah", "last_name": "Dunniom", "email": "zdunniom1@usgs.gov", "gender": "Male", "ip_address": "117.250.85.114" },
		{ "id": 3, "first_name": "Graeme", "last_name": "Eardley", "email": "geardley2@ow.ly", "gender": "Male", "ip_address": "2.49.205.103" },
		{ "id": 4, "first_name": "Constantino", "last_name": "Bugg", "email": "cbugg3@mashable.com", "gender": "Male", "ip_address": "46.197.214.131" },
		{ "id": 5, "first_name": "Kennith", "last_name": "Kalinowsky", "email": "kkalinowsky4@oaic.gov.au", "gender": "Male", "ip_address": "136.123.198.38" },
		{ "id": 6, "first_name": "Paloma", "last_name": "Bourdon", "email": "pbourdon5@bloglines.com", "gender": "Female", "ip_address": "250.230.24.37" },
		{ "id": 7, "first_name": "Sarita", "last_name": "Petteford", "email": "spetteford6@whitehouse.gov", "gender": "Female", "ip_address": "159.34.186.178" },
		{ "id": 8, "first_name": "Dieter", "last_name": "Mc-Kerley", "email": "dmckerley7@furl.net", "gender": "Male", "ip_address": "161.92.89.142" },
		{ "id": 9, "first_name": "Devland", "last_name": "Baldassi", "email": "dbaldassi8@yolasite.com", "gender": "Male", "ip_address": "81.237.216.61" }]
	};

	informationList = (information: any) => {
		return (
			<DropDownList information={information} key={information.id} />
		)
	};

	onDrop = () => {
		let information = this.state.information;
		this.setState({ information });
	};

	onRemove = () => {
		let information = this.state.information;
		this.setState({ information });
	};

	table = () => {
		let taleWithRowsAndColumn = [];
		for (let i = 0; i < 4; i++) {
			let column = [];
			for (let j = 0; j < 4; j++) {
				column.push(
					<Table key={j} onDrop={this.onDrop} remove={this.onRemove} />
				);
			}
			taleWithRowsAndColumn.push(
				<div className="user-table" key={i}>
					{column}
				</div>
			);
		}
		return taleWithRowsAndColumn;
	};

	render() {
		return (
			<div className="main-container">
				<div className="header">Drag And Drop</div>
				<div className="container">
					<div className="dropdown">
						{(this.state.information || []).map((information: any) => this.informationList(information))}
					</div>
					<div className="users-table">{this.table()}</div>
				</div>
			</div>
		);
	}
}
