<script lang="ts">
	import Timestamp from '$lib/components/Timestamp.svelte';

	interface TimestampDisplaypProps {
		value: number;
		color: 'red' | 'green';
	}

	let { value, color }: TimestampDisplaypProps = $props();
</script>

<i
	class="fa-solid fa-flag mr-2"
	class:text-red-500={color === 'red'}
	class:text-green-500={color === 'green'}
></i>
<Timestamp {value} />
