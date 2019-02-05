import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFiles } from '../actions/index';

export class componentName extends Component {


  componentWillMount(){
    this.props.fetchFiles();
  }

	render() {
		return <div>{this.props.sample}</div>;
	}
}

const mapStateToProps = ({ sample }) => {
	return {
		sample
	};
};

export default connect(mapStateToProps, { fetchFiles })(componentName);
