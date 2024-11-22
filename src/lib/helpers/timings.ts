import type { EpisodeData } from '$lib/types/episode';
import type { TimingsData } from '$lib/types/timings';
import type { KeyValueMap, TimingProperties } from '$lib/types/shared';

/**
 *
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
export function calculateDifferenceBetweenTimestamps(start: number, end: number): number {
	return Math.abs(end - start);
}

/**
 *
 * @param {number} ms
 * @returns {number}
 */
export function convertMilisecondToSecond(ms: number): number {
	return ms / 1000;
}

/**
 *
 * Function to format seconds into HH:MM:SS
 *
 * @param {number} seconds
 * @returns {string}
 */
export function formatDuration(seconds: number): string {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = Math.floor(seconds % 60);

	return hours > 0
		? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
		: `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

/**
 *
 * mplement a function calculateTimings(episodeData, timingsData).
 * This function should return a copy of timingsData with calculated frontTime, endTime, and backTime fields.
 *
 * @param {EpisodeData} episodeData
 * @param {TimingsData} timingsData
 * @returns {TimingsData}
 */
export function calculateTimings(episodeData: EpisodeData, timingsData: TimingsData): TimingsData {
	const calculatedPartFields = calculatePartFields(episodeData, timingsData);
	const calculatedItemFields = calculateItemFields(episodeData, {
		...timingsData,
		part: calculatedPartFields
	});

	return {
		episode: { ...timingsData.episode },
		part: calculatedPartFields,
		item: calculatedItemFields
	};
}

/**
 *
 * Calculate items frontTime, endTime, and backTime fields
 *
 * @param {EpisodeData} episodeData
 * @param {TimingsData} timingsData
 * @returns {KeyValueMap<TimingProperties>}
 */
function calculateItemFields(
	episodeData: EpisodeData,
	timingsData: TimingsData
): KeyValueMap<TimingProperties> {
	const items: KeyValueMap<TimingProperties> = {};

	episodeData.episode.parts.forEach((partId) => {
		const initialFrontTime = timingsData.part[partId].front_time;

		episodeData.part[partId].items.forEach((itemId, index, array) => {
			const estimatedDuration: number = convertMilisecondToSecond(
				timingsData.item[itemId].estimated_duration
			);
			const previousItemId: string = array[index - 1];
			const previousItem: TimingProperties = timingsData.item[previousItemId];
			const frontTime: number =
				index === 0
					? initialFrontTime
					: previousItem.front_time + convertMilisecondToSecond(previousItem.estimated_duration);
			const endTime = frontTime + estimatedDuration;

			items[itemId] = {
				estimated_duration: estimatedDuration,
				front_time: frontTime,
				end_time: endTime,
				back_time: frontTime
			};
		});
	});

	return items;
}

function calculatePartFields(
	episodeData: EpisodeData,
	timingsData: TimingsData
): KeyValueMap<TimingProperties> {
	return episodeData.episode.parts.reduce((acc, partId, index, array) => {
		const initialOnAirTime: number = timingsData.episode.on_air_time;
		const previousPartId: string = array[index - 1];
		const previousPart: TimingProperties = acc[previousPartId];
		const estimatedDuration: number = convertMilisecondToSecond(
			timingsData.part[partId].estimated_duration
		);
		const frontTime: number =
			index === 0
				? initialOnAirTime
				: previousPart.front_time + convertMilisecondToSecond(previousPart.estimated_duration);
		const endTime: number = frontTime + estimatedDuration;

		return {
			...acc,
			[partId]: {
				estimated_duration: estimatedDuration,
				front_time: frontTime,
				end_time: endTime,
				back_time: frontTime
			}
		};
	}, {} as KeyValueMap<TimingProperties>);
}

export function convertToViewModel(episodeData: EpisodeData, timingsData: TimingsData) {
	return episodeData.episode.parts.map((partId) => ({
		title: episodeData.part[partId].title,
		estimatedDuration: timingsData.part[partId].estimated_duration,
		frontTime: timingsData.part[partId].front_time,
		endTime: timingsData.part[partId].end_time,
		backTime: timingsData.part[partId].back_time,
		items: episodeData.part[partId].items.map((itemId) => ({
			title: episodeData.item[itemId].title,
			estimatedDuration: timingsData.item[itemId].estimated_duration,
			frontTime: timingsData.item[itemId].front_time,
			endTime: timingsData.item[itemId].end_time,
			backTime: timingsData.item[itemId].back_time
		}))
	}));
}
