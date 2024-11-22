<script lang="ts">
	import type { Item } from '$lib/types/models';

	import Duration from '$lib/components/Duration.svelte';
	import CollapsibleHandle from '$lib/components/CollapsibleHandle.svelte';
	import Timestamp from '$lib/components/Timestamp.svelte';
	import Collapsible from '$lib/components/Collapsible.svelte';

	interface ItemProps {
		index: number;
		item: Item;
	}

	let { index, item }: ItemProps = $props();
	let open = $state(false);
</script>

<div class="item flex last:pb-2">
	<div class="col p-2 text-center">{index + 1}</div>
	<div class="pt-2">
		<div class="item__row box-border rounded-md border border-gray-300">
			<div class="flex" class:border-b={open}>
				<div class="col p-2">
					<CollapsibleHandle {open} toggle={() => (open = !open)} />
					<div
						class="text-uppercase inline rounded-md bg-slate-400 p-1 text-sm uppercase text-white"
					>
						Item {index + 1}
					</div>
				</div>
				<div class="col--wide border-r border-gray-300 p-2 font-extrabold">
					{item.title}
				</div>
				<div class="col border-r border-gray-300 p-2 text-right">
					<Duration value={item.estimatedDuration} />
				</div>
				<div class="col border-r border-gray-300 p-2 text-right">
					<Timestamp value={item?.frontTime} />
				</div>
				<div class="col border-r border-gray-300 p-2 text-right">
					<Timestamp value={item?.endTime} />
				</div>
				<div class="col p-2 text-right">
					<Timestamp value={item?.backTime} />
				</div>
			</div>
			<Collapsible {open}>
				<div class="m-2 border-r bg-slate-100 p-2">Some item content comes here.</div>
			</Collapsible>
		</div>
	</div>
</div>
