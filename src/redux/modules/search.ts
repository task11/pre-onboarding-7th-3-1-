const GET_RESULTS = 'search/GET_RESULTS' as const;

export const getResults = (data: []) => ({
  type: GET_RESULTS,
  payload: data,
});

type SearchState = {
  data: [];
};

type SearchAction = ReturnType<typeof getResults>;

const initialState: SearchState = {
  data: [],
};

function search(
  action: SearchAction,
  state: SearchState = initialState,
): SearchState {
  switch (action?.type) {
    case GET_RESULTS:
      return { data: action.payload };
    default:
      return state;
  }
}

export default search;
