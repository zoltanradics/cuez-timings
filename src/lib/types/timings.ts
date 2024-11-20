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
