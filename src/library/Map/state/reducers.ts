import { BASE_LAYERS_STYLE } from "../constants";
import produce, { Draft, Immutable } from 'immer';
import { MapAction, SET_BASE_LAYER } from "./actions";

interface MapState extends Immutable<{}> {
  readonly baseLayerStyle: BASE_LAYERS_STYLE
}

export const defaultState: MapState = {
  baseLayerStyle: BASE_LAYERS_STYLE.DEFAULT
};

export const mapReducer = produce((draft: Draft<MapState>, action: MapAction) => {
  switch(action.type) {
    case SET_BASE_LAYER:
      draft.baseLayerStyle = action.payload.baseLayerStyle;
  }
}, defaultState);