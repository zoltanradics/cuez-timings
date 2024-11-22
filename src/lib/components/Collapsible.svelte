<script lang="ts">
	import type { Snippet } from 'svelte';

	interface CollapsibleProps {
		open: boolean;
		children: Snippet;
	}

	let { children, open }: CollapsibleProps = $props();
</script>

{#if open}
	{@render children()}
{/if}
