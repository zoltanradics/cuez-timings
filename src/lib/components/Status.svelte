<script lang="ts">
	import { EpisodeStatus } from '$lib/types/episode';

	interface SatusProps {
		status: EpisodeStatus;
	}

	let { status }: SatusProps = $props();

	function displayStatus(status: string): string {
		switch (status) {
			case EpisodeStatus.ACTIVE:
				return 'Live';
			default:
				return status;
		}
	}
</script>

<div class="px-4">
	{displayStatus(status)}
	<i class="fa-solid fa-chevron-down ml-1 text-sm"></i>
</div>
