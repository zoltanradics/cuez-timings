export interface TimingProperties {
	readonly estimated_duration: number;
	front_time: number;
	end_time: number;
	back_time: number;
}

export type KeyValueMap<T> = {
	[key: string]: T;
};
