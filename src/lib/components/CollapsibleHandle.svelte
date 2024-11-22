<script lang="ts">
	interface CollapsibleHandleProps {
		open: boolean;
		label?: string;
		toggle(): void;
	}

	let { open, label, toggle }: CollapsibleHandleProps = $props();
</script>

<button onclick={toggle}>
	<i class="fa-solid mr-2 text-xs" class:fa-caret-down={open} class:fa-caret-right={!open}></i>
	<span class="font-semibold">{label}</span>
</button>
