<script lang="ts">
	import { calculateDifferenceBetweenTimestamps } from '$lib/helpers/timings';
	import Duration from '$lib/components/Duration.svelte';

	interface DurationDisplayProps {
		onAirTime: number;
		offAirTime: number;
	}

	const { onAirTime, offAirTime }: DurationDisplayProps = $props();
	const durationDifference = calculateDifferenceBetweenTimestamps(onAirTime, offAirTime);
</script>

<div>
	<i class="fa-solid fa-stopwatch mr-2"></i>
	<Duration value={durationDifference} /> 
</div>
