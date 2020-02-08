import {connect} from 'react-redux';

const withRedux = (Component) => {
	const mapStateToProps = (data) => ({
        places: data.places
    });

	return connect(
		mapStateToProps
	)(Component);
};

export default withRedux;
