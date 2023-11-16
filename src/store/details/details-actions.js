export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';

const setLoading = () => ({
  type: SET_LOADING,
})


const setError = () => ({
  type: SET_LOADING,
});


const setCountry = () => ({
  type: SET_COUNTRY,
});


export const loadCountryByName = (name) => (dispatch, _, { client, api }) => {
  dispatch(setLoading());

  client.get(api.searchByCountry(name))
    .then(({ data }) => dispatch(setCountry(data[0])))
    .catch((error) => dispatch(setError(error.message)))
}