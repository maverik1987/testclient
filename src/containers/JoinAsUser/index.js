import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import view from './view';
import { fetchContent } from 'store/actions/confluence';
import { login } from 'store/actions/user';
import userSelector from 'store/selectors/user';

const onSubmit = ({
  login,
}) => values => {
  console.log('values', values)
  login(values);
};

const onClick = ({
  fetchContent
}) => () => {
  fetchContent();
};


const mapStateToProps = state => ({
  isFetching: userSelector.isFetching(state),
});


const mapDispatchToProps = {
  login,
  fetchContent,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit,
    onClick,
  }),
  reduxForm({
    form: 'join_as_user',
  }),
)(view);
