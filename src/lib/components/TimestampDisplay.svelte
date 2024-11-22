<script lang="ts">
	import Timestamp from '$lib/components/Timestamp.svelte';

	interface TimestampDisplaypProps {
		value: number;
		color: 'red' | 'green';
		withContainer?: boolean;
	}

	let { value, color, withContainer }: TimestampDisplaypProps = $props();
</script>

{#if withContainer}
	<div class="icon p-2">
		<i
			class="fa-solid fa-flag mr-2"
			class:text-red-500={color === 'red'}
			class:text-green-500={color === 'green'}
		></i>
	</div>
	<div class="rounded-md border border-gray-300 p-2 text-right" class:col={withContainer}>
		<Timestamp {value} />
	</div>
{:else}
	<i
		class="fa-solid fa-flag mr-2"
		class:text-red-500={color === 'red'}
		class:text-green-500={color === 'green'}
	></i>
	<div class="inline">
		<Timestamp {value} />
	</div>
{/if}
