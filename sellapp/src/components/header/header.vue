<template>
	<div id="header">
		<div class="merchant">
			<div class="pic">
				<img :src="seller.avatar" alt="头像" width="64" height="64">
			</div>
			<div class="content">
				<span class="brand"></span>
				<span class="name">{{ seller.name }}</span>
				<p class="description">
					{{ seller.description }} / {{ seller.deliveryTime }}送达
				</p>
				<div v-if="seller.supports" class="support">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{ seller.supports[0].description }}</span>
				</div>
			</div>
		</div>
		<div class="bulletin">
			<span class="icon"></span><span class="text">{{ seller.bulletin }}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		}
	}
</script>

<style rel="stylesheet" lang="less">
@import '../../common/style/mixin.less';
	#header {
		background: rgba(7, 17, 27, .5);
		.merchant {
			padding: 24px 12px 18px;
			font-size: 0;
			.pic {
				display: inline-block;
				vertical-align: top;
				margin-right: 16px;
				img {
					border-radius: 2px;
				}
			}
			.content {
				display: inline-block;
				.brand {
					display: inline-block;
					width: 30px;
					height: 18px;
					.bg-image('../../components/header/brand');
					background-size: 30px 18px;
					vertical-align: top;
					margin-right: 6px;
				}
				.name {
					font-size: 16px;
					color: rgb(255, 255, 255);
					font-weight: bold;
					line-height: 18px;
				}
				.description {
					line-height: 12px;
					font-size: 12px;
					color: rgb(255, 255, 255);
					margin: 8px 0 10px 0;
				}
				.support {
					.icon {
						display: inline-block;
						width: 12px;
						height: 12px;
						background-size: 12px;
						vertical-align: top;
						margin-right: 4px;
						&.decrease {
							.bg-image('../../components/header/decrease_1');
						}
						&.discount {
							.bg-image('../../components/header/discount_1');
						}					
						&.guarantee {
							.bg-image('../../components/header/guarantee_1');
						}					
						&.invoice {
							.bg-image('../../components/header/invoice_1');
						}
						&.special {
							.bg-image('../../components/header/special_1');
						}	
					}
					.text {
						line-height: 12px;
						font-size: 10px;
						color: rgb(255, 255, 255);
					}
				}
			}	
		}
		.bulletin {
			position: relative;
			padding: 0 22px 0 12px;
			overflow: hidden;
			text-overflow: ellipsis;
			background: rgba(7, 17, 27, .2);
			height: 28px;
			line-height: 28px;
			.icon {
				display: inline-block;
				width: 22px;
				height: 12px;
				.bg-image('../../components/header/bulletin');
				background-size: 22px 12px;
				margin-top: 7px;
				vertical-align: top;
			}
			.text {
				display: inline-block;
				font-size: 10px;
				color: rgb(255, 255, 255);
				line-height: 28px;
				white-space: nowrap;
				margin: 0 4px;
				text-overflow: ellipsis;
				max-width: 350px;
				overflow: hidden;
			}
			.icon-keyboard_arrow_right {
				position: absolute;
				top: 10px;
				right: 12px;
				font-size: 10px;
			}
		}
	}
</style>