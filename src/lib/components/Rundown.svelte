<script lang="ts">
	import type { EpisodeData } from '$lib/types/episode';
	import type { TimingsData } from '$lib/types/timings';
	import { calculateTimings, convertToViewModel } from '$lib/helpers/timings';
	import Part from '$lib/components/Part.svelte';
	import RundownHead from '$lib/components/RundownHead.svelte';
	import RundownFoot from '$lib/components/RundownFoot.svelte';

	interface RundownProps {
		episodeData: EpisodeData;
		timingsData: TimingsData;
	}

	let { episodeData, timingsData }: RundownProps = $props();

	// Implement a function calculateTimings(episodeData, timingsData). This function should return a copy of timingsData with calculated frontTime, endTime, and backTime fields.
	const calculatedTimings = calculateTimings(episodeData, timingsData);

	// Transfer calculated timings data into a data structure what is easier to present
	const parts = convertToViewModel(episodeData, calculatedTimings);

	// Get off air time
	const offAirTime = calculatedTimings.episode.off_air_time;
</script>

<RundownHead />
<div class="rundown__part-list">
	{#each parts as part}
		<Part {part} />
	{/each}
</div>
<RundownFoot {offAirTime} />
