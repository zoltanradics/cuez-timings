import type { KeyValueMap } from './shared';

export interface EpisodeData {
	episode: Episode;
	part: KeyValueMap<Part>;
	item: KeyValueMap<Item>;
}

export enum EpisodeStatus {
	ACTIVE = 'active'
	// Possibly more statuses, but only 'active' status was found in the provided json data sets
}

export interface Episode {
	readonly id: string;
	status: EpisodeStatus;
	title: string;
	parts: Array<string>;
}

interface Part {
	readonly id: string;
	title: string;
	items: Array<string>;
}

interface Item {
	readonly id: string;
	title: string;
}
