declare module "*.jpg" {
	const value: any;
	export = value;
}
declare module "*.png" {
	const value: any;
	export = value;
}
declare module "*.svg" {
	const value: any;
	export = value;
}
// HadleProps
declare module "react-range" {
	import * as React from "react";
	export default class Range extends React.Component<SliderProps> { }
	export class Range extends React.Component<RangeProps> { }
	export class getTrackBackground extends React.Component<Void> { }
}
declare module "react-snowfall" {
	import * as React from "react";
	export default class Snowfall extends React.Component { }
}