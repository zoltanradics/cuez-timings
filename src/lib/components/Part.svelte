<script lang="ts">
	import CollapsibleHandle from '$lib/components/CollapsibleHandle.svelte';
	import Duration from '$lib/components/Duration.svelte';
	import Timestamp from '$lib/components/Timestamp.svelte';
	import Item from '$lib/components/Item.svelte';
	import Collapsible from '$lib/components/Collapsible.svelte';

	let { part } = $props();

	let open = $state(true);
</script>

<div class="part__head flex border-b border-gray-300 bg-gray-100 font-extrabold">
	<div class="col p-2"></div>
	<div class="col p-2">
		<CollapsibleHandle {open} toggle={() => (open = !open)} label={'PART'} />
	</div>
	<div class="col--wide border-r border-gray-300 p-2">{part.title}</div>
	<div class="col border-r border-gray-300 p-2 text-right">
		<Duration value={part.estimatedDuration} />
	</div>
	<div class="col border-r border-gray-300 p-2 text-right">
		<Timestamp value={part.frontTime} />
	</div>
	<div class="col border-r border-gray-300 p-2 text-right">
		<Timestamp value={part.endTime} />
	</div>
	<div class="col border-r border-gray-300 p-2 text-right">
		<Timestamp value={part.backTime} />
	</div>
</div>

<Collapsible {open}>
	<div class="part__item-list border-b border-gray-300">
		{#each part.items as item, index}
			<Item {index} {item} />
		{/each}
	</div>
</Collapsible>
