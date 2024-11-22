<script lang="ts">
	import { formatTimestamp } from '$lib/helpers/timings';

	interface TimestampProps {
		value: number;
	}

	let { value }: TimestampProps = $props();
</script>

{formatTimestamp(value)}
