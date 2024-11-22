<script lang="ts">
	let { children, open } = $props();
</script>

{#if open}
	{@render children()}
{/if}
