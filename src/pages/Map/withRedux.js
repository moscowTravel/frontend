import {connect} from 'react-redux';
import {changePlaces} from '../../store/actions/index';

const withRedux = (Component) => {
	const mapStateToProps = (data) => ({
        places: data.places
	});
	
	const mapDispatchToProps = (dispatch) => ({
		changePlaces: (data) => dispatch(changePlaces(data)),
	});

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(Component);
};

export default withRedux;
