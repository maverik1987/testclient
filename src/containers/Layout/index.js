import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { push } from 'connected-react-router';
import { isEmpty } from 'lodash';
import view from './view';
import userSelector from 'store/selectors/user';
import { getUser } from 'store/actions/user';

const mapStateToProps = state => ({
  user: userSelector.getData(state),
});

const mapDispatchToProps = {
  push,
  getUser,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getUser();
    },
    componentDidUpdate(prevProps) {
      console.log('user',this.props.user, isEmpty(this.props.user))
      if (this.props.user && prevProps.user && this.props.user._id === prevProps.user._id) {
        return;
      }
      if (!isEmpty(this.props.user)) {
        this.props.push(`/room/${this.props.user.roomId}`);
      }
    },
  })
)(view);
