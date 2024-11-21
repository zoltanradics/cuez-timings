<script lang="ts">
	import Status from '$lib/components/Status.svelte';
	import { EpisodeStatus } from '$lib/types/episode';
	import TimestampDisplay from '$lib/components/TimestampDisplay.svelte';
	import DurationDisplay from '$lib/components/DurationDisplay.svelte';

	interface HeadProps {
		status: EpisodeStatus;
		onAirTime: number;
		offAirTime: number;
	}

	let { status, onAirTime, offAirTime }: HeadProps = $props();
</script>

<div class="w-full border-b border-gray-300">
	<div class="m-3 flex">
		<div class="mr-2 border-r-2 border-gray-200 pr-2">
			<i class="fa-solid fa-arrow-left"></i>
		</div>
		<div class="mr-5">
			<Status {status} />
		</div>
		<div class="mr-5">
			<TimestampDisplay color="green" value={onAirTime} />
		</div>
		<div class="mr-5">
			<TimestampDisplay color="red" value={offAirTime} />
		</div>
		<div class="mr-3">
			<DurationDisplay {onAirTime} {offAirTime} />
		</div>
	</div>
</div>
