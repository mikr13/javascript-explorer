export const TOGGLE_DARK_MODE = "ui/prefersDarkMode"
export const TOGGLE_TAB_INDEX = "ui/tabIndex"

const initialState = {
  prefersDarkMode: false,
  tabIndex: 0,
  tabs: [
    { name: "Strings", value: 0 },
    { name: "Arrays", value: 1 },
    { name: "Objects", value: 2 },
  ],
  colors: { pink: "#FEB3B3", green: "#B0EA68" },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE: {
      return {
        ...state,
        prefersDarkMode: !state.prefersDarkMode,
      }
    }

    case TOGGLE_TAB_INDEX: {
      return {
        ...state,
        tabIndex: action.value,
      }
    }

    default: {
      return { ...state }
    }
  }
}

export const changeDarkMode = () => async (dispatch) => {
  dispatch({ type: TOGGLE_DARK_MODE })
}
