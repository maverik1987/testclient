import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import { push } from 'connected-react-router';
import view from './view';
import { fetchContent } from 'store/actions/confluence';
import { login } from 'store/actions/user';
import userSelector from 'store/selectors/user';

const onSubmit = ({
  login,
  push,
}) => values => {
  console.log('values', values)
  login(values);
};

const mapStateToProps = state => ({
  isFetching: userSelector.isFetching(state),
});

const mapDispatchToProps = {
  login,
  fetchContent,
  push,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit,
  }),
  reduxForm({
    form: 'join_as_pulisher',
  }),
)(view);
