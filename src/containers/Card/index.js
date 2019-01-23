import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import {
  deleteCard,
  updateCard,
} from 'store/actions/card';
import userSelector from 'store/selectors/user';
import view from './view';

const onSubmit = ({
  updateCard,
}) => values => {
  console.log('values', values)
  updateCard(values);
};

const onClick = ({
  deleteCard,
  card,
}) => () => {
  deleteCard({ id: card.id });
};

const mapStateToProps = state => ({
  isFetching: userSelector.isFetching(state),
});

const mapDispatchToProps = {
  deleteCard,
  updateCard,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit,
    onClick,
  }),
  reduxForm({
    form: 'card',
  }),
)(view);
