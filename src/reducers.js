const numberOfSteps = 3;


const initialState = {
  allowedSteps: new Array(numberOfSteps).fill(false),
  values: new Set(),
};

export default function StepsReducer(state = initialState, action) {
  switch (action.type) {
    case "allowStep":
      state.allowedSteps[action.payload.stepNumber - 1] = true;
      return state;
    case "addValues":
      //console.log(state.values, action.payload.value);
      state.values.delete(action.payload.oldValue);
      state.values = state.values.add(action.payload.newValue)
      
    default:
      return state;
  }
}


