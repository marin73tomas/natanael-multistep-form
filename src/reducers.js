const numberOfSteps = 3;


const initialState = {
  allowedSteps: new Array(numberOfSteps).fill(false),
};

export default function StepsReducer(state = initialState, action) {
  switch (action.type) {
    case "allowStep":
      //console.log(state.allowedSteps)
      state.allowedSteps[action.payload.stepNumber - 1 ] = true;
      return state;
    case "forbidStep":
      state.allowedSteps[action.payload.stepNumber - 1] = false;
      return state;
    default:
      return state;
  }
}


