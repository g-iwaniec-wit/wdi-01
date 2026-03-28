<script lang="ts">
	import { base } from '$app/paths';
	import { siteContent } from '$lib/data/content';

	const iconSrc = `${base}/images/ux-icon.png`;
</script>

<header>
	<div class="header-content">
		<h1 id="page-title">{siteContent.title}</h1>
		<img class="header-icon" src={iconSrc} alt="Ikona UX" />
	</div>
</header>

<style>
	header {
		padding: clamp(1rem, 3vw, 1.5rem);
		background-color: transparent;
		display: flex;
		justify-content: center;
	}

	.header-content {
		width: min(100%, 38rem);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(1rem, 2vw, 1.5rem);
		text-align: center;
	}

	h1 {
		margin: 0;
		font-size: clamp(2rem, 6vw, 4rem);
		line-height: 0.95;
	}

	.header-icon {
		width: min(100%, 16rem);
		height: auto;
		object-fit: contain;
	}

	@media (max-width: 640px) {
		header {
			padding: 0 clamp(1rem, 5vw, 1.5rem);
		}

		.header-content {
			gap: clamp(0.75rem, 2.5svh, 1.25rem);
		}

		.header-icon {
			width: min(100%, 11rem);
		}
	}
</style>
