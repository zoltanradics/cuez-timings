<script lang="ts">
	interface CollapsibleHandleProps {
		open: boolean;
		label: string;
	}

	const { open, label }: CollapsibleHandleProps = $props();
</script>

<span class="mr-2 text-xs">
	<i class="fa-solid" class:fa-caret-down={open} class:fa-caret-right={!open}></i>
</span>
<span class="font-semibold">{label}</span>
