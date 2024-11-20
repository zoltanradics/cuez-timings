<script lang="ts">
	interface TimestampProps {
		value: number;
	}

	const {value }: TimestampProps = $props();
	const formattedTime = new Date(value * 1000).toLocaleString('be-BE', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
</script>

<span>{formattedTime}</span>
