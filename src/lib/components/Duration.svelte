<script lang="ts">
	import { formatDuration } from '$lib/helpers/timings';

	interface DurationProps {
		value: number;
	}

	const { value }: DurationProps = $props();
	const formattedDuration = formatDuration(value);
</script>

<span>{formattedDuration}</span>