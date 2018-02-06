<template>
	<div class="wrapper">
		<div class="menu">
			<ul class="menu-list">
				<li v-for="item in goods" class="menu-item">
					<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
					<span class="text">{{ item.name }}</span>
				</li>
			</ul>
		</div>
		<div class="food"></div>
	</div>
</template>

<script type="ecmascript-6">
	const ERR_OK = 0

	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				goods: []
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'],

			this.$axios.get('/api/goods')
				.then(response => {
					response = response.data
					if(response.errno == ERR_OK) {
						this.goods = response.data
					}
				})
				.catch(error => {
					console.log(error)
			})
		}
	}
</script>

<style rel="stylesheet" lang="less" scoped>

	@import '../../common/style/mixin.less';
	.wrapper {
		display: flex;
		position: absolute;
		top: 174px;
		bottom: 48px;
		width: 100%;
		overflow: hidden;
		.menu {
			width: 80px;
			background: #f3f5f7;
			.menu-list {
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: 100%;
				.menu-item {					
					flex: 1;
					font-size: 0;
					padding: 12px;
					.icon {
						display: inline-block;
						width: 12px;
						height: 12px;
						background-size: 12px;
						vertical-align: top;
						margin-right: 2px;
						&.decrease {
							.bg-image('../../components/goods/decrease_3');
						}
						&.discount {
							.bg-image('../../components/goods/discount_3');
						}					
						&.guarantee {
							.bg-image('../../components/goods/guarantee_3');
						}					
						&.invoice {
							.bg-image('../../components/goods/invoice_3');
						}
						&.special {
							.bg-image('../../components/goods/special_3');
						}
					}
					.text {
						position: relative;
						font-size: 12px;
						line-height: 14px;
						color: #000;
						&::after {
							position: absolute;
							bottom: -12px;
							display: block;
							content: '';
							width: 56px;
							height: 1px;
							border-bottom: 1px solid rgba(7, 17, 27, .1);
						}
					}
					
				}
			}
		}
		.food {
			flex: 1;
		}
	}
</style>