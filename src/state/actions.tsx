// ::::::::::::::::::::::::::::::::::::::::::::::::
// Test action
// ::::::::::::::::::::::::::::::::::::::::::::::::

export const DO_SOMETHING = "DO_SOMETHING";

interface DoSomething {
  (stateName: string, value: number): DoSomethingReturn;
}

export interface DoSomethingReturn {
  type: string;
  payload: {
    stateName: string;
    value: number;
  };
}

export const doSomething: DoSomething = (stateName, value) => {
  return {
    type: DO_SOMETHING,
    payload: {
      stateName,
      value
    }
  };
};
