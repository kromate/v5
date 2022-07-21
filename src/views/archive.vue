<template>
	<DefaultLayout>
		<section>
			<header>
				<h1 class="font-bold text-6xl text-white mt-12">Archive</h1>
				<p class="text-orange mt-2 tracking-wide">
					A big list of things I’ve worked on
				</p>
			</header>

			<div class="table-section">
				<table>
					<thead>
						<tr>
							<th>Year</th>
							<th>Title</th>
							<th class="hide-on-mobile">Made at</th>
							<th class="hide-on-mobile">Built with</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="n in 10" :key="n">
							<td class="year">2022</td>

							<td class="title">wirepay dahsboard</td>

							<td class="company hide-on-mobile">wirepay</td>

							<td class="tech hide-on-mobile">vue . nuxt . tailwind</td>

							<td class="links">
								<redirect class="text-sm text-secondary" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	</DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import redirect from '@/assets/icons/redirect.vue';
</script>

<style scoped lang="scss">
.table-section {
	margin: 100px -20px;

	@media (max-width: 768px) {
		margin: 50px -10px;
	}

	table {
		width: 100%;
		border-collapse: collapse;

		.hide-on-mobile {
			@media (max-width: 768px) {
				display: none;
			}
		}

		tbody tr {
			&:hover,
			&:focus {
				background-color: var(--light-navy);
			}
		}

		th,
		td {
			padding: 10px;
			text-align: left;

			&:first-child {
				padding-left: 20px;

				@media (max-width: 768px) {
					padding-left: 10px;
				}
			}
			&:last-child {
				padding-right: 20px;

				@media (max-width: 768px) {
					padding-right: 10px;
				}
			}

			svg {
				width: 20px;
				height: 20px;
			}
		}

		tr {
			cursor: default;

			td:first-child {
				border-top-left-radius: var(--border-radius);
				border-bottom-left-radius: var(--border-radius);
			}
			td:last-child {
				border-top-right-radius: var(--border-radius);
				border-bottom-right-radius: var(--border-radius);
			}
		}

		td {
			&.year {
				padding-right: 20px;
				color: var(--orange);
				@media (max-width: 768px) {
					padding-right: 10px;
					font-size: var(--fz-sm);
				}
			}

			&.title {
				padding-top: 15px;
				padding-right: 20px;
				color: var(--white);
				font-size: var(--fz-xl);
				font-weight: 600;
				line-height: 1.25;
			}

			&.company {
				font-size: var(--fz-lg);
				white-space: nowrap;
			}

			&.tech {
				font-size: var(--fz-xxs);
				font-family: var(--font-mono);
				line-height: 1.5;
				.separator {
					margin: 0 5px;
				}
				span {
					display: inline-block;
				}
			}

			&.links {
				div {
					display: flex;
					align-items: center;

					a {
						flex-shrink: 0;
					}

					a + a {
						margin-left: 10px;
					}
				}
			}
		}
	}
}
</style>
