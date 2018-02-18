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
			<div v-if="seller.supports" @click="showModal" class="support-count">
				<span class="text">{{ seller.supports.length }}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin" @click="showModal">
			<span class="icon"></span><span class="text">{{ seller.bulletin }}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background-img">
			<img :src="seller.avatar" alt="背景" width="100%" height="100%">
		</div>
		<transition name="fade">
			<div v-show="modalShow" class="modal">
				<div class="main clearfix">
					<div class="detail-main">
						<h1 class="name">{{ seller.name }}</h1>
						<star :size="48" :score="seller.score"></star>
						<div class="title">
							<span class="text">优惠信息</span>
						</div>
						<ul v-if="seller.supports" class="supports">
							<li class="support-item" v-for="(item,index) in seller.supports">
								<span class="icon" :class="classMap[seller.supports[index].type]"></span>
								<span class="text">{{seller.supports[index].description}}</span>
							</li>
						</ul>
						<div class="title">
							<span class="text">商家公告</span>
						</div>
						<div class="description">
							<p>{{ seller.bulletin }}</p>
						</div>
					</div>
				</div>
				<div class="modal-close" @click="hideModal">
					<i class="icon-close"></i>
				</div>
			</div>
		</transition>
	</div>
</template>

<script type="text/ecmascript-6">
	import star from '../star/star'
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				modalShow: false
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		},
		methods: {
			showModal() {
				this.modalShow = true
			},
			hideModal() {
				this.modalShow = false
			}
		},
		components: {
			star
		}
	}
</script>

<style rel="stylesheet" lang="less">
@import '../../common/style/mixin.less';
	#header {
		background: rgba(7, 17, 27, .5);
		position: relative;
		overflow: hidden;
		.merchant {
			position: relative;
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
			.support-count {
				position: absolute;
				right: 12px;
				bottom: 10px;
				height: 24px;
				padding: 0 8px;
				background: rgba(0, 0, 0, .2);
				border-radius: 14px;
				.text {
					font-size: 10px;
					color: rgb(255, 255, 255);
					line-height: 25px;
				}
				.icon-keyboard_arrow_right {
					display: inline-block;
					margin-left: 2px;
					font-size: 10px;
					color: #fff;
				}
			}	
		}
		.bulletin {
			position: relative;
			padding: 0 50px 0 12px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
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
			}
			.text {
				display: inline-block;
				font-size: 10px;
				color: rgb(255, 255, 255);
				line-height: 28px;
				margin: 0 4px;
				vertical-align: top;
			}
			.icon-keyboard_arrow_right {
				position: absolute;
				top: 8px;
				right: 12px;
				font-size: 10px;
				color: #fff;
			}
		}
		.background-img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			filter: blur(10px);
		}
		.modal {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;			
			z-index: 60;
			overflow: auto;
			background: rgba(7, 17, 27, .8);
			.main {
				min-height: 100%;
				width: 100%;
				.detail-main {
					margin-top: 64px;
					padding-bottom: 64px;
					.name {
						color: #fff;
						font-size: 16px;
						font-weight: 700;
						line-height: 16px;
						text-align: center;
					}
					.star {
						text-align: center;
						margin-top: 16px;
					}
					.title {
						display: flex;
						width: 80%;
						margin: 28px auto 24px auto;
						.text {
							padding: 0 12px;
							font-size: 14px;
							font-weight: 700;
							color: #fff;
						}
						&::before {
							display: inline-block;
							content: '';
							flex: 1;
							position: relative;
							top: -6px;
							border-bottom: 1px solid rgba(255, 255, 255, .2);
						}
						&::after {
							display: inline-block;
							content: '';
							flex: 1;
							position: relative;
							top: -6px;
							border-bottom: 1px solid rgba(255, 255, 255, .2);
						}
					}
					.supports {
						width: 80%;
						margin: 0 auto;
						.support-item {
							padding: 0 12px;
							margin-bottom: 12px;
							font-size: 0;
							&:last-child {
								margin-bottom: 0;
							}
							.icon {
								display: inline-block;
								width: 16px;
								height: 16px;
								vertical-align: top;
								margin-right: 6px;
								background-size: 16px;
								&.decrease {
									.bg-image('../../components/header/decrease_2');
								}
								&.discount {
									.bg-image('../../components/header/discount_2');
								}					
								&.guarantee {
									.bg-image('../../components/header/guarantee_2');
								}					
								&.invoice {
									.bg-image('../../components/header/invoice_2');
								}
								&.special {
									.bg-image('../../components/header/special_2');
								}
							}
							.text {
								font-size: 12px;
								color: #fff;
								line-height: 12px;
							}
						}	
					}
					.description {
						width: 80%;
						margin: 0 auto;
						p {
							padding: 0 12px;
							font-size: 12px;
							color: #fff;
							line-height: 24px;
						}
					}	
				}
			}
			.modal-close {
				position: relative;
				width: 32px;
				height: 32px;
				font-size: 32px;
				clear: both;
				margin: -64px auto 0 auto;
				color: rgba(255, 255, 255, .5);
			}
		}
	}

	.fade-enter-active, .fade-leave-active {
	    transition: opacity .5s
	}
	.fade-enter, .fade-leave-to {
	    opacity: 0
	}
</style>