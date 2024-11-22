import { describe, it, expect } from 'vitest';
import {
	calculateDifferenceBetweenTimestamps,
	convertMilisecondToSecond,
	formatDuration
} from './timings';

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

describe('convertMilisecondToSecond', () => {
	it('Convert 1000ms to 1sec', () => {
		expect(convertMilisecondToSecond(1000)).toBe(1);
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
