<template>
	<div class="shopcart">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo">
						<i class="icon-shopping_cart"></i>
					</div>
				</div>
				<div class="price">￥0</div>
				<div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
			</div>
			<div class="content-right">
				<div class="pay">
					￥{{ minPrice }}起送
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	
	export default {
		props: {
			deliveryPrice: {
				type: Number,
				default: 0
			},
			minPrice: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style rel="stylesheet" lang="less">
	.shopcart {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 50;
		width: 100%;
		height: 48px;
		.content {
			display: flex;
			background: #141d27;
			.content-left {
				flex: 1;
				font-size: 0;
				.logo-wrapper {
					display: inline-block;
					position: relative;
					top: -10px;
					margin: 0 12px;
					padding: 6px;
					width: 56px;
					height: 56px;
					box-sizing: border-box;
					vertical-align: top;
					border-radius: 50%;
					background: #141d27;
					.logo {
						width: 100%;
						height: 100%;
						border-radius: 50%;
						background: #2b343c;
						text-align: center;
						.icon-shopping_cart {
							font-size: 24px;
							line-height: 44px;
							color: #80858a;
						}
					}
				}
				.price {
					display: inline-block;
					font-size: 16px;
					vertical-align: top;
					margin-top: 12px;
					line-height: 24px;
					box-sizing: border-box;
					padding-right: 12px;
					border-right: 1px solid rgba(255, 255, 255, 0.1);
					font-weight: 700;
					color: rgba(255, 255, 255, .4);
				}
				.desc {
					display: inline-block;
					vertical-align: top;
					line-height: 24px;
					margin: 12px 0 0 12px;
					font-size: 10px;
					color: rgba(255, 255, 255, .4);
				}
			}
			.content-right {
				flex: 0 0 105px;
				width: 105px;
				.pay {
					font-size: 12px;
					line-height: 48px;
					height: 48px;
					text-align: center;
					color: rgba(255, 255, 255, .4);
					font-weight: 700;
					background: #2b333b
				}
			}
		}
	}
</style>