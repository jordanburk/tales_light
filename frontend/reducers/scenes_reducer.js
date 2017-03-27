import { merge } from "lodash";

import {
  RECEIVE_SCENES,
  RECEIVE_SCENE,
  REQUEST_SCENES,
  REQUEST_SCENE,
  REMOVE_SCENE } from "./../actions/scene_actions";

const scenesReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case REMOVE_SCENE:
      console.log(action);
      console.log(newState);
      delete newState[action.scene.title];
      console.log(newState);
      return newState;

    case REQUEST_SCENES, REQUEST_SCENE:
      return newState;

    case RECEIVE_SCENE:
      newState = merge(newState, {[action.scene.title]: action.scene});
      return newState;

    case RECEIVE_SCENES:
      newState = {};
      action.scenes.forEach(scene => {
        newState[scene.title] = scene;
      });
      return newState;

    default:
      return state;
  }
};

export default scenesReducer;
