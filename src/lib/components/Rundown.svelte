<script lang="ts">
	import { calculateTimings, convertToViewModel } from '$lib/helpers/timings';
	import PartNew from '$lib/components/PartNew.svelte';
	import RundownHead from '$lib/components/RundownHead.svelte';

	let { episodeData, timingsData } = $props();

	const partIds = episodeData.episode.parts;

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
	console.log('parts', parts);
</script>

<RundownHead />
<div class="rundown__part-list">
	{#each parts as part}
		<PartNew {part} />
	{/each}
</div>
