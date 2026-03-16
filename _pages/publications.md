---
layout: page
permalink: /publications/
title: Research
description: Now my research focuses on controling the molecular weight distribution of polymer
nav: true
nav_order: 1
---

---

## Projects

<div class="htimeline">
  <div class="htimeline-track"></div>

  <div class="htimeline-item">
    <div class="htimeline-dot"></div>
    <div class="htimeline-label">Mar 2022 – Jun 2023</div>
    <div class="htimeline-title">CO₂ Electroreduction</div>
  </div>

  <div class="htimeline-item">
    <div class="htimeline-dot"></div>
    <div class="htimeline-label">Aug 2023 – Jan 2024</div>
    <div class="htimeline-title">Fenton Catalyst</div>
  </div>

  <div class="htimeline-item">
    <div class="htimeline-dot"></div>
    <div class="htimeline-label">Sep 2024 – Jun 2025</div>
    <div class="htimeline-title">Oxygen Evolution</div>
  </div>

  <div class="htimeline-item">
    <div class="htimeline-dot"></div>
    <div class="htimeline-label">Sep 2025 – Present</div>
    <div class="htimeline-title">Polymer Design</div>
  </div>
</div>

---

## Publications

<style>
	/* Horizontal timeline */
	.htimeline {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin: 2rem 0 2rem 0;
		padding-top: 1.5rem;
	}

	.htimeline-track {
		position: absolute;
		top: 0.37rem;
		left: 5%;
		right: 5%;
		height: 2px;
		background: var(--global-theme-color);
		opacity: 0.4;
		z-index: 0;
	}

	.htimeline-item {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		z-index: 1;
	}

	.htimeline-dot {
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		background: var(--global-theme-color);
		box-shadow: 0 0 0 4px rgba(38, 84, 124, 0.2);
		margin-bottom: 0.6rem;
	}

	.htimeline-label {
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--global-text-color-light);
		margin-bottom: 0.3rem;
	}

	.htimeline-title {
		font-size: 0.93rem;
		font-weight: 600;
		color: var(--global-text-color);
	}

	.publications {
		margin-top: 0.25rem !important;
	}

	.publications h2.bibliography {
		margin-top: 0.75rem !important;
		padding-top: 0.5rem !important;
	}
</style>

<div class="publications">

{% bibliography %}

</div>
