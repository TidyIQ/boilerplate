import { Reducer } from "@tidyiq/core/state/reducers/default";
import { DO_SOMETHING, DoSomethingReturn } from "./actions";

// ::::::::::::::::::::::::::::::::::::::::::::::::
// Test reducer
// ::::::::::::::::::::::::::::::::::::::::::::::::

const doSomethingReducer: Reducer<DoSomethingReturn> = {
  [DO_SOMETHING]: (state, action) => {
    return {
      ...state,
      [action.payload.stateName]: action.payload.value
    };
  }
};

const reducers = {
  ...doSomethingReducer
};

export default reducers;
