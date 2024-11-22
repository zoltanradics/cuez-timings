<script lang="ts">
	import TimestampDisplay from '$lib/components/TimestampDisplay.svelte';

	let { offAirTime } = $props();
</script>

<div class="rundown__foot mt-2">
	<div class="row flex justify-end">
		<TimestampDisplay color="red" value={offAirTime} withContainer={true} />
	</div>
</div>

<style>
	.rundown__foot {
		width: 60rem;
	}
</style>
