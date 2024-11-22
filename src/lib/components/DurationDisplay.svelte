<script lang="ts">
	import { calculateDifferenceBetweenTimestamps } from '$lib/helpers/timings';
	import Duration from '$lib/components/Duration.svelte';

	interface DurationDisplayProps {
		onAirTime: number;
		offAirTime: number;
	}

	let { onAirTime, offAirTime }: DurationDisplayProps = $props();
</script>

<i class="fa-solid fa-stopwatch mr-2"></i>
<Duration value={calculateDifferenceBetweenTimestamps(onAirTime, offAirTime)} />
