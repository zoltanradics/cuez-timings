<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Rundown from '$lib/components/Rundown.svelte';
	import { EpisodeStatus } from '$lib/types/episode';

	import episodeData from '../data/episode.json';
	import timingsData from '../data/timings.json';

	const status = episodeData.episode.status as EpisodeStatus;
	const onAirTime = timingsData.episode.on_air_time;
	const offAirTime = timingsData.episode.off_air_time;
</script>

<Head {status} {onAirTime} {offAirTime} />
<Rundown {episodeData} {timingsData} />
