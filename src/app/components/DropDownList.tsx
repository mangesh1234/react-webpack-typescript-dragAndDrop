import * as React from 'react';

export default class DropDownList extends React.Component <any, any>{
	constructor(props: any) {
		super(props);

		this.state = {
			dropped: null
		};
	}

	 handle = (e: any) => {
		let { information} = this.props;
		e.dataTransfer.setData('information', JSON.stringify({ id: information.id, name: information.first_name }));
	};
    render() {
	return (
		<div className="dropdwon-item" key={this.props.information.id} draggable onDragStart={this.handle}>
			{this.props.information.first_name} {this.props.information.last_name}
		</div>
    );
    }
};