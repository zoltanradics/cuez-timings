<script lang="ts">
	import CollapsibleHandle from '$lib/components/CollapsibleHandle.svelte';
	import Duration from '$lib/components/Duration.svelte';
	import Timestamp from '$lib/components/Timestamp.svelte';
	import Item from '$lib/components/Item.svelte';

	let { title, estimatedDuration, frontTime, endTime, backTime, items } = $props();

	const open = $state(true);
</script>

<div class="part__head flex border-b border-gray-300 bg-gray-100">
	<div class="col p-2"></div>
	<div class="col p-2"><CollapsibleHandle {open} label={'PART'} /></div>
	<div class="col--wide border-r border-gray-300 p-2">{title}</div>
	<div class="col border-r border-gray-300 p-2 text-right">
		<Duration value={estimatedDuration} />
	</div>
	<div class="col border-r border-gray-300 p-2 text-right">
		<Timestamp value={frontTime} />
	</div>
	<div class="col border-r border-gray-300 p-2 text-right"><Timestamp value={endTime} /></div>
	<div class="col border-r border-gray-300 p-2 text-right">
		<Timestamp value={backTime} />
	</div>
</div>

<div class="part__items">
	{#each items as item, index}
		<Item {index} {item} />
	{/each}
</div>
