import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setVisibilityFilter } from '../../actions/todos'
import Link from '../Link'

const mapStateToProps = (state:any, ownProps:any) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch:Dispatch, ownProps:any) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
