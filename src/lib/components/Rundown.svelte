<script lang="ts">
	import { calculateTimings, convertToViewModel } from '$lib/helpers/timings';
	import Part from '$lib/components/Part.svelte';
	import RundownHead from '$lib/components/RundownHead.svelte';

	let { episodeData, timingsData } = $props();

	/**
	 *
	 * Implement a function calculateTimings(episodeData, timingsData).
	 * This function should return a copy of timingsData with calculated frontTime, endTime, and backTime fields.
	 *
	 */
	const calculatedTimings = calculateTimings(episodeData, timingsData);

	/**
	 *
	 * Transfer calculated timings data into a data structure what is easier to present
	 *
	 */
	const parts = convertToViewModel(episodeData, calculatedTimings);
</script>

<RundownHead />
<div class="rundown__part-list">
	{#each parts as part}
		<Part {part} />
	{/each}
</div>
