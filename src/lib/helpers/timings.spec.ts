import { describe, it, expect, assert } from 'vitest';

import {
	calculateDifferenceBetweenTimestamps,
	calculateTimings,
	formatDuration,
	formatTimestamp
} from './timings';

import episodeData from '../../data/episode.json';
import timingsData from '../../data/timings.json';
import timingsDataMock from '../../data/timings-mock.json';

describe('calculateDifferenceBetweenTimestamps', () => {
	it('Checing positive difference', () => {
		expect(calculateDifferenceBetweenTimestamps(0, 100)).toBe(100);
	});

	it('Checing negative difference', () => {
		expect(calculateDifferenceBetweenTimestamps(100, 0)).toBe(100);
	});

	it('Checing zero difference', () => {
		expect(calculateDifferenceBetweenTimestamps(0, 0)).toBe(0);
	});
});

describe('formatDuration', () => {
	it('Checking one second', () => {
		expect(formatDuration(1)).toBe('00:01');
	});

	it('Checking one minute', () => {
		expect(formatDuration(60)).toBe('01:00');
	});

	it('Checking one hour', () => {
		expect(formatDuration(3600)).toBe('01:00:00');
	});

	it('Checking one hour one minute one second', () => {
		expect(formatDuration(3661)).toBe('01:01:01');
	});
});

describe('formatTimestamp', () => {
	it('Checking 13:00', () => {
		expect(formatTimestamp(1712235600)).toBe('13:00:00');
	});

	it('Checking 13:45', () => {
		expect(formatTimestamp(1712238300)).toBe('13:45:00');
	});
});

describe('calculateTimings', () => {
	const calculatedTimings = calculateTimings(episodeData, timingsData);

	it('Checking function with mocked data (comparing calculation with pre-calculated mock)', () => {
		assert.deepEqual(calculatedTimings, timingsDataMock);
	});
});
