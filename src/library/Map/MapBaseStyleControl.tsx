import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import baseStyles from './MapBaseStyleControl.module.css';

export interface MapBaseLayerControlProps {
  styles?: {
    MapBaseLayerControl?: string;
  };
  onClick: () => void;
  name: string;
}

export const MapBaseStyleControl = (props: PropsWithChildren<MapBaseLayerControlProps>) => {
  const { styles, name, onClick } = props;
  const mapBaseLayerControlClasses = classNames(baseStyles.MapBaseStyleControl, styles?.MapBaseLayerControl)
  return (
    <div className={mapBaseLayerControlClasses}>
      <span onClick={onClick}>{name}</span>
    </div>
  );
};