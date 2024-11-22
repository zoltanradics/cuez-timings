<script lang="ts">
	import Duration from './Duration.svelte';
	import CollapsibleHandle from '$lib/components/CollapsibleHandle.svelte';
	import Timestamp from '$lib/components/Timestamp.svelte';

	interface ItemProps {
		index: number;
		item: any;
	}

	let { index, item }: ItemProps = $props();
</script>

<div class="flex last:pb-2">
	<div class="col p-2 text-center">{index + 1}</div>
	<div class="pt-2">
		<div class="item box-border flex rounded-md border border-gray-300">
			<div class="col p-2">
				<div class="text-uppercase inline rounded-md bg-slate-400 p-1 text-sm uppercase text-white">
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
	</div>
</div>
