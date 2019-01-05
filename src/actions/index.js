export const SLIDERS_START = 'SLIDERS_START';
export const SLIDERS_SUCCESS = 'SLIDERS_SUCCESS';

export const slidersStart = (payload) => {
  console.log('action signin paylod: ', payload);
  return{
    type: SLIDERS_START,
    payload,
  };
};

export const slidersSuccess = (payload) => {
  console.log('action signin paylod: ', payload);
  return{
    type: SLIDERS_SUCCESS,
    payload,
  };
};
