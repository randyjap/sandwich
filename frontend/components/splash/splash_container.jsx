import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
