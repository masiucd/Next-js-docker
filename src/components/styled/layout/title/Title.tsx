/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyTitle, StyH1, StyH4 } from './Title.styles';

interface P {
  mainTitle: string;
  subTitle? : string;
}

const Title: React.FC<P> = ({ mainTitle, subTitle }) => (
  <StyTitle>
    <StyH1>
      {' '}
      {mainTitle}
      {' '}
    </StyH1>
    <StyH4>{subTitle}</StyH4>
  </StyTitle>
);
export default Title;
