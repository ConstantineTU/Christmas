declare module '*.jpg' {
  const value: string;
  export = value;
}
declare module '*.png' {
  const value: string;
  export = value;
}
declare module '*.svg' {
  const value: string;
  export = value;
}
declare module '*.mp3' {
  const value: string;
  export = value;
}
// HadleProps
declare module 'react-range' {
  import * as React from 'react';

  export default class Range extends React.Component<SliderProps> { }
  export class Range extends React.Component<RangeProps> { }
  export class getTrackBackground extends React.Component<Void> { }
}
declare module 'csstype' {
  import * as CSS from 'csstype';

  export declare module 'csstype' {
    interface Properties { }
  }
  export declare module 'csstype' {
    interface PropertiesHyphen { }
  }
}
declare module 'react-snowfall' {
  import * as React from 'react';

  export default class Snowfall extends React.Component { }
}
