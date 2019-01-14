import * as React from 'react';

export default class Dropable extends React.Component<any,any> {
	constructor(props: any) {
		super(props);

		this.state = {
			dropped: null
		};
	}
	onDragOver = (e: any) => {
		e.preventDefault();
	};

	onDrop = (e: any) => {
		if (!this.state.dropped) {
			let { deletes } = this.props;
			let user = JSON.parse(e.dataTransfer.getData('information'));
			this.setState({ dropped: user });
			deletes(user.id);
		}
	};

	delete = () => {
		this.props.remove(this.state.dropped.id);
		this.setState({ dropped: null });
	};

	render() {
		return (
			<div
				className="table-column"
				onDrop={this.onDrop}
				onDragOver={this.onDragOver}>
				{this.state.dropped ? (
					<div>
						{this.state.dropped.name} <span onClick={this.delete}>X</span>
					</div>
				) : (
					''
				)}
			</div>
		);
	}
}