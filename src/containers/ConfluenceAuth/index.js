import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import view from './view';
import { fetchContent, login } from 'store/actions/confluence';
import confluenceSelector from 'store/selectors/confluence';

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
  isFetching: confluenceSelector.content.isFetching(state),
})


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
    form: 'confluence_auth',
  })
)(view);
