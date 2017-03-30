import { connect } from "react-redux";

import { appScene, allScenes, sceneById } from "./../../reducers/selectors";
import { focusScene } from "./../../actions/app_actions";
import { updateScene, receiveScene, createScene, deleteScene }
  from "./../../actions/scene_actions";

import Editor from "./editor";

const mapStateToProps = state => ({
  appScene:  appScene(state),
  allScenes: allScenes(state)
});

const mapDispatchToProps = dispatch => ({
  updateScene:  scene => dispatch(updateScene(scene)),
  focusScene:   scene => dispatch(focusScene(scene)),
  receiveScene: scene => dispatch(receiveScene(scene)),
  createScene:  scene => dispatch(createScene(scene)),
  deleteScene:  scene => dispatch(deleteScene(scene))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
