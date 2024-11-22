import type { KeyValueMap, TimingProperties } from './shared';

export interface TimingsData {
	episode: EpisodeData;
	part: KeyValueMap<TimingProperties>;
	item: KeyValueMap<TimingProperties>;
}

interface EpisodeData {
	on_air_time: number;
	off_air_time: number;
}

export interface Part extends TimingPropertiesModel {
	readonly id: string;
	title: string;
	items: Array<Item>;
}

export interface Item extends TimingPropertiesModel {
	readonly id: string;
	title: string;
}

interface TimingPropertiesModel {
	readonly estimatedDuration: number;
	frontTime: number;
	endTime: number;
	backTime: number;
}
