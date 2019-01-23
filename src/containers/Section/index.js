import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form';
import { deleteSection } from 'store/actions/section';
import { addCard, getCards } from 'store/actions/card';
import cardSelector from 'store/selectors/card';
import view from './view';

const onSubmit = ({
  addCard,
  section,
}) => values => {
  console.log('values', values)
  addCard({
    ...values[section.id],
    sectionId: section.id,
  });
};

const onClickDelete = ({
  deleteSection,
  section,
}) => () => {
  deleteSection({ id: section.id });
};

const mapStateToProps = state => ({
  cards: cardSelector.getData(state),
});

const mapDispatchToProps = {
  getCards,
  addCard,
  deleteSection,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit,
    onClickDelete,
  }),
  lifecycle({
    // componentDidMount() {
    //   this.props.getCards({ sectionId: this.props.section.id });
    // },
  }),
  reduxForm({
    form: 'section',
  }),
)(view);
