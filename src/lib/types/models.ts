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
