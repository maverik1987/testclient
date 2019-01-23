import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form';
import { push } from 'connected-react-router';
import { isEmpty } from 'lodash';
import {
  createSection,
  getSections,
  updateSection,
  deleteSection,
} from 'store/actions/section';
import {
  deleteUser,
} from 'store/actions/user';
import userSelector from 'store/selectors/user';
import sectionSelector from 'store/selectors/section';
import view from './view';

const onSubmit = ({
  createSection,
}) => values => {
  createSection(values.section);
};

const onClickExit = ({
  deleteUser,
  user,
}) => () => deleteUser({ id: user._id });


const mapStateToProps = state => ({
  user: userSelector.getData(state),
  sections: sectionSelector.getData(state),
});


const mapDispatchToProps = {
  push,
  deleteUser,
  createSection,
  getSections,
  updateSection,
  deleteSection,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit,
    onClickExit,
  }),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.user)) {
        this.props.push('/');
      }
      this.props.getSections();
    },
    componentDidUpdate() {
      if (isEmpty(this.props.user)) {
        this.props.push('/');
      }
    },
    componentWillUnmount() {
      console.log('unmount', this.props.user)
      if (!isEmpty(this.props.user)) {
        this.props.deleteUser({ id: this.props.user._id });
      }
    }
  }),
  reduxForm({
    form: 'section',
  }),
)(view);
