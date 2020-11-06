import { useState } from 'react';
import { Map } from '../../library/Map';
import { BASE_LAYERS_STYLE } from '../../library/Map/constants';
import { MapBaseStyleControl } from '../../library/Map/MapBaseStyleControl';

import styles from './DashboardMap.module.css';

export const DashboardMap = () => {
  const [state, setState] = useState({
    baseLayerStyle: BASE_LAYERS_STYLE.DEFAULT
  });

  const handleClick = (baseLayerStyle: BASE_LAYERS_STYLE) => {
    setState({ baseLayerStyle });
  }

  return (
    <Map baseLayerStyle={state.baseLayerStyle}>
      <div className={styles.MapControlContainer}>
        <MapBaseStyleControl onClick={() => handleClick(BASE_LAYERS_STYLE.SATALITE)} name='Satalite' />
        <MapBaseStyleControl onClick={() => handleClick(BASE_LAYERS_STYLE.DEFAULT)} name='Basic' />
      </div>
    </Map>
  )
};