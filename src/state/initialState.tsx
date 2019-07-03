import { State } from "@tidyiq/core/state/state";

// ::::::::::::::::::::::::::::::::::::::::::::::::
// Initial state
// ::::::::::::::::::::::::::::::::::::::::::::::::

const initialState: State = {
  forms: {},
  progress: {
    test: {
      status: "waiting",
      error: {
        message: "test",
        description: "test2"
      }
    }
  }
};

export default initialState;
