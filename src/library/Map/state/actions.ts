import { createAction, PayloadAction } from '@reduxjs/toolkit'
import { BASE_LAYERS_STYLE } from '../constants';

export const SET_BASE_LAYER = 'SET_BASE_LAYER';

export const setBaseLayerStyle = createAction(SET_BASE_LAYER, (baseLayerStyle: BASE_LAYERS_STYLE) => {
  return {
    payload: {
      baseLayerStyle
    }
  }
});

export type MapAction = ReturnType<typeof setBaseLayerStyle>;