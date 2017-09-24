.container {
	&.xl {
		@media @xl {
			width: @screen-xl-min; // !!!
		}
	}

	&.flexible {
		width: 100%;
		min-width: 1200px;

		@media @xs {
			width: 100%;
			min-width: 100%;
			padding: 0;
		}
	}

	&.min-width-limited {
		@media @md {width: 1170px;}
		@media @sm {width: 1170px;}

		@media @xs {
			width: 100%;
			min-width: 100%;
			padding: 0;
		}
	}
}

.sports-main-block {
	@highlight-color: @local-highlight-color;

	.clearfix();

	background-color: @sports-background;
	padding-top: 10px;
	padding-bottom: 10px;

	&.min-width-limited {
		@media @md {width: 1170px;}
		@media @sm {width: 1170px;}
	}

	&.flexible {
		@media @md {width: 1200px;}
		@media @sm {width: 1200px;}
	}


/*
 /$$ /$$                     /$$                   /$$     /$$     /$$
| $$|__/                    | $$                  | $$    | $$    |__/
| $$ /$$ /$$    /$$ /$$$$$$ | $$$$$$$   /$$$$$$  /$$$$$$ /$$$$$$   /$$ /$$$$$$$   /$$$$$$
| $$| $$|  $$  /$$//$$__  $$| $$__  $$ /$$__  $$|_  $$_/|_  $$_/  | $$| $$__  $$ /$$__  $$
| $$| $$ \  $$/$$/| $$$$$$$$| $$  \ $$| $$$$$$$$  | $$    | $$    | $$| $$  \ $$| $$  \ $$
| $$| $$  \  $$$/ | $$_____/| $$  | $$| $$_____/  | $$ /$$| $$ /$$| $$| $$  | $$| $$  | $$
| $$| $$   \  $/  |  $$$$$$$| $$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$/| $$| $$  | $$|  $$$$$$$
|__/|__/    \_/    \_______/|_______/  \_______/   \___/   \___/  |__/|__/  |__/ \____  $$
                                                                                 /$$  \ $$
                                                                                |  $$$$$$/
                                                                                 \______/
*/

	&.livebetting {
		@media @xs {
			height: auto;
		}

		height: ~"calc(100vh - 150px)";
		padding-bottom: 0;

		&.event-view {}

		&.euro-version {
			.left-sidebar {
				top: 0;
			}

			.content {
				top: 0;
			}

			@media (max-width: 1366px) {
				.left-sidebar {
					display: block;
				}

				.content {
					left: 15px + 270px + 10px;
				}
			}

			@media @xs {
				.left-sidebar {
					display: none;
				}
			}

		//	.table-euroversion {
		//		.table-accordion {
		//			@media @lg {width: ~"calc(100vw - 15px - 270px - 10px - 10px - 270px - 15px - 15px)";}
		//			@media @md {width: ~"calc(100vw - 15px - 270px - 10px - 10px - 270px - 15px - 15px)";}
		//			@media @sm {width: ~"calc(100vw - 15px - 270px - 10px - 10px - 270px - 15px - 15px)";}
		//			@media @xs {width: ~"calc(100vw - 15px - 270px - 10px - 10px - 270px - 15px - 15px)";}
		//			@media @xl {width: ~"calc(100vw - 15px - 270px - 10px - 10px - 270px - 15px - 15px)";}
		//		}
		//	}
		}

		&.multi-view {
			&.sports-select-folded {
				.menu-bar.secondary {
					.sports-select-button-bar {
						.add-events-button {
							.icon('\f078', 'after');
						}
					}

					.sports-select {
						display: none;
					}
				}
				.content {
					top: 39px;
				}
			}

			.content {
				top: 39px; // 236
				left: 15px;
			}
		}

		&.overview {
			.content {
				top: 40px;
				left: 15px;
			}
		}

		&>.container {
			position: relative;
			height: 100%;
			width: 100%;
		}

		.menu-bar {
			@media @xs {display: none;}

			position: absolute;
			top: 0;
			left: 15px;
			right: 10px + 270px + 15px;
			height: 40px;

			&.static {
				position: static;
			}

			&.secondary {
				top: 39px;
				background-color: darken(@sports-block-background, 5%);
				border-top: 1px darken(@sports-block-background, 10%) solid;
				padding-right: 0;
				height: auto;

				&>* {
					float: none;
				}

				.sports-select-button-bar {
					line-height: 36px;
					padding: 0 10px;

					.add-events-button {
						.link-color(@sports-block-header-background);
						.icon('\006b', 'before', 'icon', {
							font-size: 18px;
							margin-right: 8px;
							vertical-align: -2px;
						});
						.icon('\f077', 'after', @rules: {
							font-size: 10px;
							margin-left: 8px;
						});

						margin-right: 25px;
					}

					.remove-all-button {
						.link-color(darken(@sports-block-background, 55%), 'darken');
					}

					.icon-three-columns {
						width: 40px;
						padding-right: 0;
					}

					@media (max-width: 1366px) {
						.icon-two-columns,
						.icon-three-columns {
							display: none;
						}
					}
				}

				.sports-select {
					padding: 10px 10px 7px 10px;
					background-color: darken(@sports-background, 10%);

					.tabs-block {
						.clearfix();

						position: relative;
						background-color: @sports-block-background;
						margin-bottom: 10px;

						.title {
							position: absolute;
							left: 50%;
							top: 0;
							line-height: 33px;
							width: 150px;
							margin-left: -75px;
							text-align: center;
						}

						.lateral {
							float: right;
							line-height: 33px;
							padding-right: 10px;
						}

						a {
							.link-color(darken(@sports-block-background, 55%), 'darken');
						}
					}

					.tabs {
						.tab {
							width: 40px;
							height: 33px;

							&.active {
								a {
									color: @sports-block-header-background;
								}
							}

							a {
								color: darken(@sports-background, 20%);
							}

							.icon {
								font-size: 26px;
								line-height: 1;
								vertical-align: -4px;
							}
						}
					}

					.sports-multi-slect-blocks {
						height: 83px + 15px;
						overflow-x: scroll;
						overflow-y: hidden;
						cursor: grab;

						.wrapper {
							height: 83px;
							width: 10000px;
						}

						.sports-multi-slect-block {
							float: left;
						}
					}
				}
			}

			hr {
				height: 40px;
			}

			.tabs {
				.clearfix();

				margin-bottom: 0;
				border-bottom: none;
				position: relative;
				float: left;

				.tab {
					position: relative;
					font-size: 13px;
					line-height: 40px;
					float: left;
					padding: 0 10px;
					text-align: center;
					width: 120px;
					border-right: 1px darken(@sports-block-background, 10%) solid;

					a {
						.link-color(@content-text-color);

						display: block;
						width: 100%;
						line-height: 40px - 1px;
						font-weight: 400;
					}

					&.active {
						background: white;

						&:before {
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 3px;
							background-color: @sports-block-header-background;
						}

						a {
							color: @sports-block-header-background;
							font-weight: 700;
						}
					}
				}
			}

			.search-group {
				position: relative;
				width: 200px;
				margin-top: (40px - 25px) / 2;
				margin-right: 10px;

				.search-input {
					border: none;
					width: 100%;
					height: 23px + 1px + 1px;
					padding: 3px;

					.placeholder({

					});
				}

				.search-button {
					.icon('\f045');

					background-color: @sports-block-header-background;
					color: white;
					border: none;
					position: absolute;
					right: 1px;
					top: 1px;
					line-height: 23px;
					width: 23px;
					height: 23px;
					text-align: center;
					padding: 0;
					font-size: 16px;
				}
			}

			.table-icon-button {
				margin-top: 9px;

				&.active {
					.link-color(#368855);
				}
			}
		}

		.left-sidebar {
			@media @xs {display: none;}

			position: absolute;
			top: 53px;
			left: 15px;
			bottom: 0;
			width: 270px;
		}

		.right-sidebar {
			@media @xs {display: none;}

			position: absolute;
			top: 0;
			right: 15px;
			bottom: 0;
			width: 270px;
		}

		.content {
			@media @xs {
				position: static;

				.footer {
					display: none;
				}
			}

			position: absolute;
			top: 53px;
			left: 15px + 270px + 10px;
			right: 10px + 270px + 15px;
			bottom: 0;
			width: auto;
			margin-right: 0;
		}

		.left-sidebar,
		.right-sidebar,
		.content {
			overflow-x: hidden;
			overflow-y: hidden; // scroll
		}

		.folded-sidebar {
			display: none;

			.item {
				position: relative;

				&.active {
					.icon-button {
						&:after {
							content: '';
							display: block;
							width: 14px;
							height: 14px;
							border: 7px transparent solid;
							position: absolute;
							right: -14px;
							top: (35px - 14px) / 2;
						}
					}

					.dropdown-list {
						display: block;
					}
				}

				.icon-button {
					position: relative;
					margin-bottom: 5px;
					display: block;
					text-decoration: none;

					&:before {
						display: block;
						width: 100%;
						height: 35px;
						line-height: 35px;
						text-align: center;
						color: white;
						font-size: 25px;
					}

					&.expand-menu {
						margin-bottom: 0;

						&:before {
							font-size: 32px;
							color: #6f7f7f;
							background-color: white;
						}
					}
				}

				.dropdown-list {
					@width: 460px;
					display: none;
					background-color: @sports-block-background;
					color: @content-text-color;
					width: @width;
					min-height: 35px;
					max-height: 300px;
					position: absolute;
					right: -1 * @width - 7px;
					top: 0;
					z-index: 1;
					font-weight: 400;
					border: 1px @sports-block-background solid;
					padding: 1px;
					box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.2);

					.dropdown-list-header {
						padding: 0 6px;
						line-height: 27px;
						color: white;
					}

					.dropdown-list-content {
						max-height: 300px - 27px - 4px;
						overflow: hidden;
						padding-right: 10px;

						table {
							width: 100%;
							border-collapse: initial;

							tr {
								td {
									border-top: 1px lighten(@sports-block-background, 10%) solid;
									border-bottom: 1px darken(@sports-block-background, 10%) solid;
									font-size: 14px;

									&.cell-star {
										width: 30px;
									}

									&.cell-time {
										width: 50px;
										text-align: center;
										font-weight: 600;
									}

									&.cell-title {
										color: @sports-block-header-background;
									}

									&.cell-score {
										width: 60px;
										text-align: center;
										font-weight: 600;
										color: @highlight-color;
									}

									&.cell-icon {
										width: 30px;
										text-align: center;
									}
								}
							}
						}
					}
				}
			}

			.star		{.decorate-icon-button(#006aa6);}
			.soccer		{.decorate-icon-button(#707070);}
			.tennis		{.decorate-icon-button(#0c6ab3);}
			.baseball	{.decorate-icon-button(#ce6226);}
			.formula-1	{.decorate-icon-button(#d4372f);}
			.rugby		{.decorate-icon-button(#597b32);}
			.volleyball	{.decorate-icon-button(#21717d);}
			.cricket	{.decorate-icon-button(#8f7935);}

			.decorate-icon-button(@color){
				.icon-button {
					background-color: @color;

					&:after {
						border-left-color: @color !important;
					}
				}

				.dropdown-list {
					border-color: @color;

					.dropdown-list-header {
						background-color: @color;
					}

					.dropdown-list-content {
						.cell-time {
							color: @color;
						}
					}
				}
			}
		}

		&.fold-left-sidebar {
			.left-sidebar {
				display: none;
			}

			.folded-sidebar {
				display: block;
				position: absolute;
				left: 15px;
				width: 50px;
				top: 53px;
				padding-right: 10px;
			}

			.content {
				left: 15px + 40px + 10px;
			}
		}

		@media (max-width: 1366px) {
			.left-sidebar {
				display: none;
			}

			.folded-sidebar {
				display: block;
				position: absolute;
				left: 15px;
				width: 50px;
				top: 53px;
				padding-right: 10px;

				.expand-menu {
					display: none;
				}
			}

			.content {
				left: 15px + 40px + 10px;
			}
		}

		.if-expanded-sidebar-hide {display: block !important;}
		.if-expanded-sidebar-show {display: none !important;}

		&.expand-right-sidebar {
			@rs-size-xl: 500px;
			@rs-size-lg: 400px;
		//	@rs-size-md: 330px;

			.if-expanded-sidebar-hide {display: none !important;}
			.if-expanded-sidebar-show {display: block !important;}

			.menu-bar {
			//	@media @md {right: 10px + @rs-size-md + 15px;}
			//	@media @lg {right: 10px + @rs-size-lg + 15px;}
				@media @xl {right: 10px + @rs-size-xl + 15px;}

				right: 10px + @rs-size-lg + 15px;
			}

			.content {
			//	@media @md {right: 10px + @rs-size-md + 15px;}
			//	@media @lg {right: 10px + @rs-size-lg + 15px;}
				@media @xl {right: 10px + @rs-size-xl + 15px;}

				right: 10px + @rs-size-lg + 15px;
			}

			.right-sidebar {
			//	@media @md {width: @rs-size-md;}
			//	@media @lg {width: @rs-size-lg;}
				@media @xl {width: @rs-size-xl;}

				width: @rs-size-lg;
			}

			.sidebar-thumbs {
				.thumb {width: ~"calc(100% / 3 - 4px)" !important;}

				@media @xl {.thumb {width: ~"calc(100% / 4 - 4px)" !important;}}
			}
		}
	}

	.block-divider {
		height: 3px;
		margin: 0 !important;
		border: none;
		background: @sports-background;

		&.wide {
			height: 10px;
		}
	}


/*
 /$$       /$$                     /$$
| $$      | $$                    | $$
| $$$$$$$ | $$  /$$$$$$   /$$$$$$$| $$   /$$
| $$__  $$| $$ /$$__  $$ /$$_____/| $$  /$$/
| $$  \ $$| $$| $$  \ $$| $$      | $$$$$$/
| $$  | $$| $$| $$  | $$| $$      | $$_  $$
| $$$$$$$/| $$|  $$$$$$/|  $$$$$$$| $$ \  $$
|_______/ |__/ \______/  \_______/|__/  \__/
*/

	.block {
		margin-bottom: 10px;

		.hide-if-folded {display: block !important;}
		.show-if-folded {display: none !important;}
		.hide-if-unfolded {display: none !important;}
		.show-if-unfolded {display: block !important;}

		&.folded {
			.hide-if-folded {display: none !important;}
			.show-if-folded {display: block !important;}
			.hide-if-unfolded {display: block !important;}
			.show-if-unfolded {display: none !important;}

			.block-header {
				.toggle {
					.icon('\f054');
				}

				.icon-caret-square-up {
					.icon('\00fa', 'before', 'icon');
				}
			}

			.block-content {
				height: 0;
				overflow: hidden;
			}
		}

		&.multi-view-border {
			border: 4px darken(@sports-background, 10%) solid;

			.block-content {
				.block-divider {
					background-color: darken(@sports-background, 10%);
				}

				.coefficients-block {
					padding-right: 10px;
					background: @sports-background;
				}
			}
		}

		&.colored {
			.decorate-overview-block(@color){
				&>.block-header {
					background-color: @color;

					.tabs {
						.tab {
							&.active {
								background-color: darken(@color, 10%);

								&:before {
									background-color: lighten(@color, 15%);
								}
							}
						}
					}
				}

				&>.block-content {
					border-color: @color;

					&>.sub-block {
						border-color: @color;

						&>.block-header {}

						&>.block-content {
							.sports-table-overview {
								tr {
									td {
										border-bottom-color: @color;
									}
								}
							}
						}
					}
				}
			} // end of decorate-overview-block()

			&>.block-header {
				line-height: 30px;
				height: 30px;
				font-weight: 400;
				text-transform: none;

				&.icon:before {
					font-size: 23px;
					margin-right: 5px;
				}

				.tabs {
					margin: 0;

					.tab {
						&.active {}

						a {}
					}
				}

				.lateral {
					margin-right: -5px;

					.table-icon-button {
						font-size: 20px;
						width: 25px;
						padding: 0;
					}
				}
			}

			&>.block-content {
				border: 4px @sports-block-header-background solid;
				border-top: none;
				background-color: white;

				&>.sub-block {
					border-bottom: 3px @sports-block-header-background solid;

					&:last-child {
						border-bottom: none;
					}

					&>.block-header {
						&>.block-content {}
					}
				}
			}

			&.soccer {.decorate-overview-block(@futbol-color);}
			&.tennis {.decorate-overview-block(@tennis-color);}
			&.handball {.decorate-overview-block(@handball-color);}
			&.volleyball {.decorate-overview-block(@volleyball-color);}
			&.scorer {.decorate-overview-block(@scorer-color);}
			&.basketball {.decorate-overview-block(@basketball-color);}
			&.rugby {.decorate-overview-block(@rugby-color);}
			&.formula-1 {.decorate-overview-block(@formula-1-color);}
			&.badminton {.decorate-overview-block(@badminton-color);}
			&.baseball {.decorate-overview-block(@baseball-color);}
			&.boxing {.decorate-overview-block(@boxing-color);}
			&.cycling {.decorate-overview-block(@cycling-color);}
			&.golf {.decorate-overview-block(@golf-color);}
			&.cricket {.decorate-overview-block(@cricket-color);}
			&.table-tennis {.decorate-overview-block(@table-tennis-color);}
			&.poker {.decorate-overview-block(@poker-color);}
			&.american-football {.decorate-overview-block(@american-football-color);}
		}

		&.no-margin {
			margin-bottom: 0;
		}

		&.sub-block {
			color: @content-text-color;
			margin-bottom: 0;

			&.margin-bottom {
				margin-bottom: 10px;
			}

			.block-header {
				position: relative;
				background-color: @sports-block-background;
				font-weight: 400;
				color: @content-text-color; // @sports-block-header-background; // !!!
				text-transform: none;
				border-bottom: 1px darken(@sports-block-background, 10%) solid;

				&.small {
					height: 25px;
					line-height: 25px;
					font-size: 12px;
					padding-left: 3px;
					padding-right: 3px;

					&.icon {
						&:before {
							margin-right: 2px;
							font-size: 16px;
							width: 20px;
						}
					}

					.toggle {
						width: 30px;
						line-height: 25px;
					}
				}

				&.active {
					color: @content-text-color !important;
					background-color: @sports-radio-color;
					border-bottom-color: darken(@sports-radio-color, 15%);

					// !!! imposible arrow

					&:before {
						content: '';
						position: absolute;
						right: -14px;
						top: 14px;
						display: block;
						width: 14px;
						height: 14px;
						border-left: 7px rgba(0, 0, 0, 0.3) solid;
						border-top: 7px transparent solid;
						border-right: 7px transparent solid;
						border-bottom: 7px transparent solid;
					}

					&:after {
						content: '';
						position: absolute;
						right: -14px;
						top: 11px;
						display: block;
						width: 14px;
						height: 14px;
						border-left: 7px @sports-radio-color solid;
						border-top: 7px transparent solid;
						border-right: 7px transparent solid;
						border-bottom: 7px transparent solid;
					}

					.icon, .toggle {
						.link-color(@content-text-color);

						color: @content-text-color !important;
					}

					.table-star {
						color: @content-text-color;

						&.active {
							color: @highlight-color;
						}
					}
				}

				&.icon {
					&:before {
						font-size: 20px;
						color: darken(@sports-block-background, 50%);
					}
				}

				&.text-blue {
					color: @sports-block-header-background;
					font-weight: 600;

					&:before {
						color: @sports-block-header-background;
					}
				}

				.table-icon-button {
					.link-color(darken(@sports-block-background, 30%), 'darken');
				}

				.toggle {
					.link-color(darken(@sports-block-background, 30%), 'darken');
				}

				.table-star {
					float: left;
					margin-left: -5px;
					margin-right: 10px;
				}
			}

			.block-content {
				border-top: 1px lighten(@sports-block-background, 10%) solid;
			}
		}

		.block-header {
			background-color: @sports-block-header-background;
			color: @sports-block-header;
			height: 35px;
			line-height: 35px;
			padding-left: 10px;
			padding-right: 10px;
			text-transform: uppercase;
			font-size: 14px;
			font-weight: 600;
			overflow: hidden;
			position: relative;

			&.header-soccer {background-color: @futbol-color;}
			&.header-tennis {background-color: @tennis-color;}
			&.header-handball {background-color: @handball-color;}
			&.header-volleyball {background-color: @volleyball-color;}
			&.header-scorer {background-color: @scorer-color;}
			&.header-basketball {background-color: @basketball-color;}
			&.header-rugby {background-color: @rugby-color;}
			&.header-formula-1 {background-color: @formula-1-color;}
			&.header-badminton {background-color: @badminton-color;}
			&.header-baseball {background-color: @baseball-color;}
			&.header-boxing {background-color: @boxing-color;}
			&.header-cycling {background-color: @cycling-color;}
			&.header-golf {background-color: @golf-color;}
			&.header-cricket {background-color: @cricket-color;}
			&.header-table-tennis {background-color: @table-tennis-color;}
			&.header-poker {background-color: @poker-color;}
			&.header-american-football {background-color: @american-football-color;}

			&.header-gray {background-color: #6e7c7c;}

			&.header-livebetting-big {
				height: 40px;
				line-height: 40px;
				background-color: @sports-block-background;
				color: @sports-block-header-background;
				font-size: 17px;
			}

			&.icon {
				&:before {
					font-size: 30px;
					display: block;
					float: left;
					width: 26px;
					margin-right: 10px;
					text-align: center;
				}
			}

			.flag {
				margin-right: 5px;
				height: 20px;
				width: 30px;
				line-height: 20px;
			}

			.addtional-text {
				opacity: 0.5;
				margin-left: 30px;
			}

			.table-icon-button {
				.link-color(white);
			}

			.breadcrumbs {
				.reset-list();

				text-transform: none;
				font-weight: 500;
				background-color: darken(@sports-block-header-background, 5%);
				display: inline-block;
				margin-left: -10px;

				li {
					position: relative;
					padding: 0 5px 0 15px;
					margin-right: 2px;
					line-height: 0px;
					height: 35px;

					border-top:    35px/2 @sports-block-header-background solid;
					border-bottom: 35px/2 @sports-block-header-background solid;
					border-left:   20px/2 transparent solid;
					border-right:  20px/2 @sports-block-header-background solid;


					&:first-child {
						border-left: none;

						&:after {
							display: none;
						}
					}

					&:last-child {
						padding: 0 30px;
						border-top-color:    darken(@sports-block-header-background, 5%);
						border-bottom-color: darken(@sports-block-header-background, 5%);
						border-right-color:  darken(@sports-block-header-background, 5%);

						&:before {
							right: -20px;
							border-top:    35px/2 @sports-block-header-background solid;
							border-bottom: 35px/2 @sports-block-header-background solid;
							border-left:   20px/2 transparent solid;
							border-right:  20px/2 @sports-block-header-background solid;
						}
					}

					&:after {
						content: '';
						position: absolute;
						left: -6px;
						top: 50%;
						margin-top: -1 * 7px / 2;
						display: block;
						width: 7px;
						height: 7px;
						border-radius: 50%;
						background: white;
					}

					&:before {
						content: '';
						position: absolute;
						display: block;
						right: -30px;
						top: -1 * 35px / 2;
						width: 20px;
						height: 100%;

						border-top:    35px/2 transparent solid;
						border-bottom: 35px/2 transparent solid;
						border-left:   20px/2 @sports-block-header-background solid;
						border-right:  20px/2 transparent solid;
					}
				}
			}

			.header-button {
				.link-color(@sports-block-header);

				font-size: 28px;
				margin-left: 10px;
				display: block;
				float: right;
			}

			.tabs {
				float: right;
				margin: 5px 0 0 0;
				border: none;

				&:after {
					display: none;
				}

				.tab {
					position: relative;
					display: inline-block;
					line-height: 30px;
					height: 30px;
					padding: 0 20px;
					font-weight: 400;
					font-size: 13px;
					text-transform: none;

					a {
						.link-color(white, 'darken');

						display: block;
						width: 100%;
						line-height: 30px;
					}

					&.active {
						background-color: darken(@sports-block-header-background, 10%);

						&:before {
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 3px;
							background-color: @sports-radio-color;
						}
					}
				}

				&.full-header {
					float: left;
					margin: 0 -10px;
					display: block;
					width: ~"calc(100% + 20px)";


					.tab {
						background: darken(@sports-block-background, 60%);
						position: relative;
						display: block;
						height: 100%;
						width: 50%;
						padding: 0 0 0 10px;

						a {
							line-height: 35px;
							text-transform: uppercase;
							font-size: 14px;
							font-weight: 600;
						}

						.icon {
							display: block;
							font-size: 26px;
							float: left;
							margin-right: 5px;
						}

						.number {
							background: darken(@sports-block-background, 40%);
							float: right;
							width: 20px;
							height: 20px;
							line-height: 20px;
							text-align: center;
							border-radius: 50%;
							margin-right: 7px;
							margin-top: (35px - 20px) / 2;
						}

						&.active {
							background: transparent;

							&:before {
								display: none;
							}

							.number {
								background-color: #fe974b;
								color: black;
							}
						}
					}
				}
			}

			.lateral-text {
				float: right;
				opacity: 0.5;
			}

			.centred {
				position: absolute;
				left: 50px;
				right: 50px;
				top: 0;
				bottom: 0;
				text-align: center;
				text-transform: none;
			}

			.lateral {
				float: right;

				&.left {
					float: left;
				}

				hr {
					display: inline-block;
					width: 15px;
					margin: 0;
					border: none ;
				}

				&>*:last-child {
					padding-right: 0;
				}
			}

			.toggle {
				.icon('\f078');
				.link-color(white);

				float: right;
				display: block;
				width: 30px;
				text-align: center;
				font-size: 12px;
				margin-right: -10px;
				line-height: 34px;

				&.left {
					float: left;
					margin-left: -10px;
					margin-right: 0;
				}
			}
		}

		.block-content {
			background: @sports-block-background;
			font-size: 14px;
			font-weight: 400;
			color: @content-text-color;

			&>.disabled {
				opacity: 0.5;
			}

			&.padded {
				padding: 13px;
			}

			hr {
				margin-top: 12px;
				margin-bottom: 12px;
				border-top: 1px lighten(@sports-block-background, 10%) solid;
				border-bottom: 1px darken(@sports-block-background, 10%) solid;
			}

			.wide-button {
				color: darken(@sports-block-background, 50%);
				text-decoration: none;
				border-top: 1px lighten(@sports-block-background, 10%) solid;
				border-bottom: 1px darken(@sports-block-background, 10%) solid;
				line-height: 22px;
				text-align: center;
				display: block;

				&:hover {
					background-color: lighten(@sports-block-background, 5%);
				}

				&:active {
					background-color: darken(@sports-block-background, 2%);
				}
			}

			.line {
				padding: 5px 10px;
				border-bottom: 1px darken(@sports-block-background, 10%) solid;

				&.border-top {
					border: none;
					border-top: 1px darken(@sports-block-background, 10%) solid;
				}

				&.no-border {border: none;}
			}

			.match {
				padding: 3px 10px 10px 10px;
				border-bottom: 1px darken(@sports-block-background, 10%) solid;

				.league {
					text-align: center;
					color: darken(@sports-block-background, 30%);
					margin-bottom: 3px;
				}

				.info {
					.clearfix();

					color: darken(@sports-block-background, 40%);
					background-color: lighten(@sports-block-background, 5%);
					padding: 0 7px;
					font-size: 16px;
					position: relative;
					height: 32px;

					&>* {
						line-height: 32px;
					}

					.left {
						float: left;
						font-weight: 600;
					}

					.middle {
						text-align: center;
						font-size: 14px;
					}

					.right {
						float: right;
						font-weight: 600;
					}

					.red {color: #e73c50;}
					.green {color: #4c9d2a;}

					.goal {
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						text-align: center;
						color: #e73c50;
						background-color: #f5d34b;
						background-image: url('@{img-dir}goal.png');
						background-repeat: no-repeat;
						background-position: center center;
						font-weight: bold;
					}
				}
			}

			.coefficients {
				.clearfix();

				border-bottom: 1px darken(@sports-block-background, 10%) solid;

				&.one   {}
				&.two   {}
				&.three {}
				&.four  {}
				&.five  {}

				&.one   {.coefficient {width: 100% / 1;}}
				&.two   {.coefficient {width: 100% / 2;}}
				&.three {.coefficient {width: 100% / 3;}}
				&.four  {.coefficient {width: 100% / 4;}}
				&.five  {.coefficient {width: 100% / 5;}}

				.coefficient {
					display: block;
					float: left;
					line-height: 34px;
					padding-left: 15px;
					padding-right: 15px;
					border-right: 1px darken(@sports-block-background, 10%) solid;
					background-color: lighten(@sports-block-background, 5%);

					&.blue {
						.amount {
							color: @sports-block-header-background;
						}
					}

					&.red {
						.amount {
							color: @highlight-color;
						}
					}

					&:last-child {
						border-right: none;
					}

					.amount {
						float: right;
					//	color: @highlight-color;
					}
				}
			}

			.text {
				color: @content-text-color;
				padding: 15px;
				font-weight: 400;
			}

			.search-group {
				position: relative;
				width: 100%;

				.search-input {
					border: none;
					width: 100%;
					height: 23px + 1px + 1px;
					padding: 3px;

					.placeholder({

					});
				}

				.search-button {
					.icon('\f045');

					background-color: @sports-block-header-background;
					color: white;
					border: none;
					position: absolute;
					right: 1px;
					top: 1px;
					line-height: 23px;
					width: 23px;
					height: 23px;
					text-align: center;
					padding: 0;
					font-size: 16px;
				}
			}

			.search-group-label {
				color: @content-text-color;
			}

			label {
			//	color: black;
				font-weight: 400;
			}

			@round-radio-margin: 6.5px;

			.round-radio {
				display: none;

				& + label {
					@size: 30px;

					display: inline-block;
					width: @size;
					height: @size;
					line-height: @size;
					border-radius: @size / 2;
					text-align: center;
					background-color: darken(@sports-block-background, 10%);
					color: darken(@sports-block-background, 55%);
					font-weight: 600;
					margin: 0  @round-radio-margin;
				}

				&:checked + label {
					background-color: @sports-radio-color;
					color: darken(@sports-radio-color, 47%);
				}

				&:disabled + label {
					color: darken(@sports-block-background, 30%);
					border: 1px darken(@sports-block-background, 35%) solid;
				}
			}

			.round-radio-row {
				margin-right: -1 * @round-radio-margin;
				margin-left: -1 * @round-radio-margin;
			}

			.slider-checkbox {
				& + label {
				}
			}

			.round {
				@size: 20px;

				display: inline-block;
				width: @size;
				height: @size;
				border: @size / 2 black solid;
				border-radius: @size / 2;
				border-bottom-color: darken(@sports-block-background, 5%) !important;
				border-right-color: darken(@sports-block-background, 5%) !important;
			}

			.tabs { // main tabs style
				.clearfix();

				margin-bottom: 0;
				border-bottom: none;
				width: 100%;
				position: relative;

				&:before {
					content: '';
					display: block;
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 1px;
					background-color: darken(@sports-block-background, 10%);
				}

				&.sportbook-euroversion {
					.tab {
						overflow: visible;

						&.active {
							background-color: darken(@sports-block-background, 5%);
							border-bottom: none;

							a {
								color: @sports-block-header-background;
							}

							&:before {
								top: auto;
								bottom: -1px;
								z-index: 1;
								height: 1px;
								background-color: darken(@sports-block-background, 5%);
							}
						}
					}
				}

				&.livebetting-big {
					border-top: 2px darken(@sports-block-background, 10%) solid;

					.tab {
						@media @xl {
							width: 150px;
						}

						&.active {
							&:before {
								top: -2px;
								background-color: @sports-block-header-background;
							}
						}
					}
				}

				&.table-header {
					&:before {
						background-color: darken(@sports-block-background, 30%);
					}

					.tab {
						border-bottom-color: darken(@sports-block-background, 30%);

						&.active {
							background: @sports-block-background;
							border-bottom-color: darken(@sports-block-background, 30%);
							font-weight: 700;

							&:before {
								width: 0;
								height: 0;
								left: 50%;
								bottom: 0;
								top: auto;
								margin-left: -4px;
								border: 4px @sports-block-header-background solid;
								border-top-color: transparent;
								border-right-color: transparent;
								border-left-color: transparent;
								background: none;
							}
						}
					}
				}

				&.sidebar-tabs {
					.tab {
						background-color: darken(@sports-block-background, 5%);

						&:before {
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 1px;
							background-color: lighten(@sports-block-background, 5%);
						}

						&.active {
							background-color: @sports-block-background;
							border-bottom: 1px darken(@sports-block-background, 5%) solid;
						}
					}
				}

					&.two   {.tab { width: 100% / 2;}}
					&.three {.tab { width: 100% / 3;}}
					&.four  {.tab { width: 100% / 4;}}
					&.five  {.tab { width: 100% / 5;}}

				.tab {
					position: relative;
					font-size: 13px;
					line-height: 34px;
					float: left;
					padding: 0 10px;
					border-bottom: 1px darken(@sports-block-background, 10%) solid;
					border-right: 1px darken(@sports-block-background, 10%) solid;
					text-align: center;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;

					a {
						.link-color(@content-text-color);

						display: block;
						width: 100%;
						line-height: 34px;
					}

					&.disabled {
						background-color: darken(@sports-block-background, 7%);
					}

					&.active {
						border-bottom: 1px white solid;
						background: white;
						color: @sports-block-header-background;
						font-weight: 700;

						&:before {
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 3px;
							background-color: @sports-radio-color;
						}
					}

					&.highlight-corner {
						&:after {
							content: '';
							width: 6px;
							height: 6px;
							border: 3px @sports-radio-color solid;
							position: absolute;
							right: 0;
							bottom: 0;
							border-left-color: transparent;
							border-top-color: transparent;
						}
					}
				}

 				.lateral {
					.drop-down {
						margin-top: 3px;
						border: none;

						.selected {
							background-color: transparent;
							color: darken(@sports-block-background, 30%);
						}

						.options {
							left: auto;
							right: 0;

							li {
								a {
									background-color: @sports-block-background;
									border-color: darken(@sports-block-background, 30%);
									color: @content-text-color;

									&:hover {}
								}
							}
						}
					}

					.table-icon-button {
						line-height: 29px;

						&:last-child {
							margin-right: 5px;
						}
					}
				}
			}

			.result-card {
				.icon('\f017', 'before', @rules: {
					position: absolute;
					top: 6px;
					left: 6px;
					font-size: 16px;
					line-height: 16px;
					vertical-align: -1px;
					margin-right: 8px;
					color: darken(@sports-block-background, 45%);
				});

				position: relative;
				font-weight: 400;
				padding: 6px 6px 6px 6px + 22px;
				background-color: white;

				&:after {
					content: '';
					width: 1px;
					display: block;
					position: absolute;
					left: 12px;
					top: 25px;
					bottom: 6px;
					background-color: darken(@sports-block-background, 45%);
				}

				&.green {
					&:before {
						color: green;
					}

					&:after {
						background-color: green;
					}
				}

				.time {
					color: darken(@sports-block-background, 45%);
					line-height: 16px;
					position: relative;
					margin-bottom: 5px;
				}

				.date {
					position: absolute;
					right: 6px;
					top: 6px;
					text-align: right;
					line-height: 16px;
					color: darken(@sports-block-background, 45%);
				}

				.teams {
					margin-bottom: 7px;
					width: 145px;
					color: @sports-block-header-background;

					a {
						.link-color(@sports-block-header-background);
					}
				}

				.buttons {
					position: absolute;
					right: 6px;
					top: 27px;
					text-align: right;
				}

				.score {
					position: absolute;
					right: 6px;
					top: 28px;
					text-align: right;
					font-weight: 700;
					letter-spacing: 3px;
					color: @sports-block-header-background;
				}

				.outcome {
					.icon('\011a', 'before', 'icon', {
						color: @highlight-color;
						font-size: 16px;
						margin-right: 3px;
						vertical-align: -2px;
					});

					line-height: 30px;

					.outcome-round {
						@size: 30px;

						display: block;
						float: right;
						width: @size;
						height: @size;
						line-height: @size;
						border-radius: @size / 2;
						text-align: center;
						background-color: darken(@sports-block-background, 10%);
						color: darken(@sports-block-background, 55%);
						font-weight: 600;
						margin: 0 0 0 10px;

						&.active {
							background-color: @sports-radio-color;
							color: darken(@sports-radio-color, 47%);
						}
					}
				}
			}

			.subtitle {
				padding: 5px 10px;
				border-bottom: 1px darken(@sports-block-background, 5%) solid;
				color: @sports-block-header-background;
			}

			.winner-card {
				background-color: white;
				border-bottom: 1px darken(@sports-block-background, 5%) solid;
				padding: 10px;
				position: relative;

				.name {
					color: @sports-block-header-background;
				}

				.bet {
					padding-left: 10px;

					.amount {}
				}

				.winnings {
					padding-left: 10px;

					.amount {
						color: @highlight-color;
					}
				}

				.list-button {
					.link-color(darken(@sports-block-background, 50%), 'darken');
					.icon('\00c7', 'after', 'icon');

					background-color: darken(@sports-block-background, 5%);
					width: 30px;
					height: 30px;
					line-height: 30px;
					border-radius: 15px;
					text-align: center;
					font-size: 22px;
					position: absolute;
					right: 10px;
					bottom: 10px;
				}
			}

			.banner {
				display: block;

				img {
					width: 100%;
				}
			}

			.sidebar-thumbs {
				.clearfix();

				margin: 5px -2px;

				.thumb {
					margin: 2px;
					float: left;
					background: darken(@sports-block-background, 30%);
					border: 2px transparent solid;
				//	width: 95px + 2px * 2;
					width: ~"calc(100% / 2 - 4px)";
					height: 60px;
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;

					&:hover {
						border-color: @sports-block-header-background;
					}
				}
			}

			.more-promotions {
				text-align: center;
				display: block;
				margin-top: 5px;
			}

			.hierarchical-list {
				list-style: none;
				padding: 0;

				ul {
					list-style: none;
					padding: 0;
				}

				li {
					display: block;
					width: 100%;
				}

				&>li {
					&:hover {&>.item {.chevron {display: block;}}}

					&.active {
						&>ul {
							display: block;
						}

						&>.item {
							color: white;
							background-color: @lateral-1-level-active;
							border-top: 1px lighten(@lateral-1-level-active, 10%) solid;
							border-bottom: 1px darken(@lateral-1-level-active, 10%) solid;

							.number {
								color: white;
							}

							.chevron {
								.icon('\f078');
							}
						}
					}

					&>ul {
						display: none;

						&>li {
							&:hover {&>.item {.chevron {display: block;}}}

							&.active {
								&>ul {
									display: block;
								}

								&>.item {
									color: @content-text-color;
									background-color: @lateral-2-level-active;
									border-top: 1px lighten(@lateral-2-level-active, 10%) solid;
									border-bottom: 1px darken(@lateral-2-level-active, 10%) solid;

									.number {
										color: @content-text-color;
									}

									.chevron {
										.icon('\f078');

										display: block;
									}
								}
							}

							&>.item {
								color: @content-text-color;
								background-color: darken(@sports-block-background, 5%);
								border-top: 1px lighten(@sports-block-background, 5%) solid;
								border-bottom: 1px darken(@sports-block-background, 15%) solid;
							}

							&>ul{
								display: none;

								&>li {
									&>.item {
										color: @content-text-color;
										background-color: darken(@sports-block-background, 10%);
										border-top: 1px lighten(@sports-block-background, 0%) solid;
										border-bottom: 1px darken(@sports-block-background, 20%) solid;
									}
								}
							}
						}
					}
				}
			}

			.list {
				.clearfix();

				&>* {
					position: relative;

					&.corner {
						&:after {
							content: '';
							display: block;
							position: absolute;
							left: 0;
							top: 0;
							border-width: 6px;
							border-style: solid;
							border-right-color: transparent !important;
							border-bottom-color: transparent !important;
						}

						&.corner-green {
							&:after {
								border-color: #3ec253;
							}
						}
						&.corner-yellow {
							&:after {
								border-color: #e4a333;
							}
						}
					}
				}

				.sub {
					.item {
						color: @content-text-color;
						background-color: darken(@sports-block-background, 5%);
					}
				}

				.item {
					position: relative;
					display: block;
					border-top: 1px lighten(@sports-block-background, 10%) solid;
					border-bottom: 1px darken(@sports-block-background, 10%) solid;
					padding-left: 15px;
					height: 34px;
					line-height: 34px;
					text-decoration: none;
					color: @sports-block-header-background;
					margin-bottom: 0;

					&:hover {
						background-color: lighten(@sports-block-background, 5%);
					}

					&:active {
						background-color: darken(@sports-block-background, 2%);
					}

					&.active {
						background-color: @sports-radio-color;
						border-top-color: lighten(@sports-radio-color, 15%);
						border-bottom-color: darken(@sports-radio-color, 15%);

					// !!! imposible arrow

					//	&:before {
					//		content: '';
					//		position: absolute;
					//		right: -14px;
					//		top: 14px;
					//		display: block;
					//		width: 14px;
					//		height: 14px;
					//		border-left: 7px rgba(0, 0, 0, 0.3) solid;
					//		border-top: 7px transparent solid;
					//		border-right: 7px transparent solid;
					//		border-bottom: 7px transparent solid;
					//	}
					//
					//	&:after {
					//		content: '';
					//		position: absolute;
					//		right: -14px;
					//		top: 11px;
					//		display: block;
					//		width: 14px;
					//		height: 14px;
					//		border-left: 7px @sports-radio-color solid;
					//		border-top: 7px transparent solid;
					//		border-right: 7px transparent solid;
					//		border-bottom: 7px transparent solid;
					//	}

						.number {
							color: @content-text-color;
						}
					}

					&.icon {
						&:before {
							font-size: 22px;
							display: block;
							float: left;
							width: 24px;
							margin-right: 10px;
							text-align: center;
						}
					}

					.flag {
						margin-right: 10px;
					}

					.number {
						float: right;
						margin-right: 6px;
						font-weight: 400;
						color: darken(@sports-block-background, 30%);
					}

					.lateral {
						float: right;
						margin-right: 15px;

						input[type=checkbox] {margin-right: -2px;}
					}

					.chevron {
						.icon('\f054');

						display: none;
						float: right;
						margin-right: 15px;
						font-size: 10px;
						line-height: 32px;
					}

					input[type=checkbox] {
						display: inline-block;
						line-height: 12px;
						margin-left: -3px;
						margin-right: 12px;
					}
				}

				.card {
					background-color: lighten(@sports-block-background, 5%);
					box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
					margin: 4px 5px;
					padding: 8px 5px 8px 40px;
					color: @sports-block-header-background;

					&.icon {
						&:before {
							font-size: 20px;
							display: block;
							width: 24px;
							text-align: center;
							position: absolute;
							left: 5px;
							top: 7px;
							line-height: 1;
						}
					}

					.close-block {
						.link-color(darken(@sports-block-background, 35%));

						.icon('\f00d', @rules: {
							display: block;
							position: absolute;
							right: 5px;
							top: 5px;
							font-size: 12px;
							line-height: 1;
						});
					}

					.time {
						.icon('\f017', 'before', @rules: {
							margin-right: 5px;
						});

						margin-top: -18px;
					}

					.date {}

					.time,
					.date {
						text-align: right;
						font-weight: 400;
						color: darken(@sports-block-background, 40%);
						margin-bottom: -5px;
					}
				}
			}

			.teams-stats-block {
				.clearfix();

				background-color: white;

				&>* {
					float: left;
				}

				.title {
					width: 100%;
					text-align: center;
					padding-top: 15px;
					font-weight: 600;
					color: darken(@sports-block-background, 50%);

					&:after {
						content: '';
						width: 190px;
						height: 1px;
						display: block;
						background-color: darken(@sports-block-background, 20%);
						margin: 7px auto 0 auto;
					}
				}

				.team {
					padding: 5px 15px;
					width: ~"calc(50% - 160px / 2)";

					&.team-home {
						.performance {
							.logo {
								right: 0;
							}

							.amount {
								border-right: none;
								margin-left: 25px;

								.bar {
									background-color: @home-team-color;
									background: linear-gradient(to left,
										@home-team-color,
										white
									);

									&.value-0   { background: linear-gradient(to left, @home-team-color, white 0%);  }
									&.value-10  { background: linear-gradient(to left, @home-team-color, white 10%); }
									&.value-20  { background: linear-gradient(to left, @home-team-color, white 20%); }
									&.value-30  { background: linear-gradient(to left, @home-team-color, white 30%); }
									&.value-40  { background: linear-gradient(to left, @home-team-color, white 40%); }
									&.value-50  { background: linear-gradient(to left, @home-team-color, white 50%); }
									&.value-60  { background: linear-gradient(to left, @home-team-color, white 60%); }
									&.value-70  { background: linear-gradient(to left, @home-team-color, white 70%); }
									&.value-80  { background: linear-gradient(to left, @home-team-color, white 80%); }
									&.value-90  { background: linear-gradient(to left, @home-team-color, white 90%); }
									&.value-100 { background: linear-gradient(to left, @home-team-color, white 100%);}
								}
							}

							.letters {
								text-align: right;
								padding-right: 20px;
							}
						}
					}

					&.team-away {
						text-align: right;

						.performance {
							.logo {
								left: 0;
							}

							.amount {
								border-left: none;
								margin-right: 25px;

								&:before {
									left: auto;
									right: -2px;
								}

								.bar {
									background-color: @away-team-color;
									background: linear-gradient(to right,
										@away-team-color ,
										white
									);

									&.value-0   { background: linear-gradient(to right, @away-team-color, white 0%);  }
									&.value-10  { background: linear-gradient(to right, @away-team-color, white 10%); }
									&.value-20  { background: linear-gradient(to right, @away-team-color, white 20%); }
									&.value-30  { background: linear-gradient(to right, @away-team-color, white 30%); }
									&.value-40  { background: linear-gradient(to right, @away-team-color, white 40%); }
									&.value-50  { background: linear-gradient(to right, @away-team-color, white 50%); }
									&.value-60  { background: linear-gradient(to right, @away-team-color, white 60%); }
									&.value-70  { background: linear-gradient(to right, @away-team-color, white 70%); }
									&.value-80  { background: linear-gradient(to right, @away-team-color, white 80%); }
									&.value-90  { background: linear-gradient(to right, @away-team-color, white 90%); }
									&.value-100 { background: linear-gradient(to right, @away-team-color, white 100%);}
								}
							}

							.letters {
								text-align: left;
								padding-left: 20px;
							}
						}
					}

					.caption {
						font-size: 13px;
						text-transform: uppercase;
						color: @sports-block-header-background;
					}

					.name {
						font-size: 16px;
						color: @content-text-color;
					}

					.performance {
						position: relative;
						min-height: 80px;
						padding-top: 1px;
						margin-bottom: 20px;
						color: @sports-block-header-background;

						.logo {
							position: absolute;
							top: 0;
							z-index: 1;
						}

						.amount {
							display: inline-block;
							position: relative;
							width: 125px;
							height: 30px;
							border: 1px darken(@sports-block-background, 40%) solid;
							border-top: none;
							margin-top: 10px;
							margin-bottom: 50px;
							padding: 10px 3px 0;

							&:before {
								content: '';
								position: absolute;
								left: -2px;
								top: 0;
								display: block;
								width: 3px;
								height: 3px;
								border-radius: 50%;
								background-color: darken(@sports-block-background, 40%);
							}

							.bar {
								width: 100%;
								height: 6px;
								position: absolute;
								left: 0;
								bottom: -7px;

								&:after {
									content: 'Performance';
									width: 125px;
									text-align: center;
									position: absolute;
									left: 0;
									bottom: -18px;
									font-size: 11px;
									color: @sports-block-header-background;

								}
							}
						}

						.letters {
							text-align: right;
							font-size: 12.5px;
							color: @sports-block-header-background;
							font-weight: 600;

							&>* {
								display: inline-block;
								width: 20px;
								height: 20px;
								line-height: 20px;
								text-align: center;
								margin-bottom: 2px;
							}

							.w {background-color: #c4df9b;}
							.d {background-color: #f5d34b;}
							.l {background-color: #ffbbbb;}
						}
					}
				}

				.league,
				.date-n-time {
					height: 30px;
					line-height: 30px;
					padding: 0 12px;
					font-size: 13px;
					color: @content-text-color;
				}

				.league {
					margin-left: -15px;
					background: @sports-block-background;
					background: linear-gradient(to right,
						darken(@sports-block-background, 10%),
						white
					);
				}

				.date-n-time {
					margin-right: -15px;
					background: @sports-block-background;
					background: linear-gradient(to left,
						darken(@sports-block-background, 10%),
						white
					);
				}

				.pie-block {
					width: 160px;
					height: 190px;
					margin-bottom: 10px;
				}

				.wins {
					width: 100%;
					text-align: center;
					font-size: 13px;
					margin: 5px 0;

					.home {}
					.x {
						margin: 0 12px;
						padding: 0 12px;
						border-left: 1px @content-text-color solid;
						border-right: 1px @content-text-color solid;
					}
					.away {}

					.amount {
						color: @away-team-color;
					}
				}

				.bottom-bar {
					width: 100%;
					border-top: 1px darken(@sports-block-background, 10%) solid;
					height: 35px;
					line-height: 34px;
					font-size: 13px;

					&>* {
						float: left;

					}

					.time {
						width: 70px;
						text-align: center;

						.amount {
							color: @highlight-color;
						}
					}

					.coefficient {
						width: ~"calc((100% - 70px) / 3)";
						padding-left: 7px;
						padding-right: 7px;
						border-right: 1px darken(@sports-block-background, 10%) solid;

						.amount {
							float: right;
						}

						.round {
							vertical-align: -6px;
							margin-right: 3px;
						}

						&.coefficient-home {.round{border-color: @home-team-color;}}
						&.coefficient-x    {.round{border-color: @x-color;}}
						&.coefficient-away {.round{border-color: @away-team-color;}}
					}

					.all-bets {
						.link-color(darken(@sports-radio-color, 12%), 'darken');

						display: block;
						width: 70px;
						text-align: center;
					}
				}
			}

			.correct-score-block {
				.clearfix();

				background-color: white;

				&>* {
					float: left;
				}

				.team {
					@padding: 15px;

					position: relative;
					padding: @padding;
					width: ~"calc(50% - (80px / 2))";

					&.team-home {
						.caption, .name {margin-left: 50px;}
					}

					&.team-away {
						text-align: right;

						.caption, .name {margin-right: 50px;}

						.logo {
							left: auto;
							right: @padding;
						}
					}

					.logo {
						position: absolute;
						left: @padding;
						top: @padding;
					}

					.caption {
						color: @sports-block-header-background;
						text-transform: uppercase;
						font-size: 13px;
						font-weight: 600;
					}

					.name {
						font-size: 20px;
						color: darken(@sports-block-background, 60%);
						margin-bottom: 10px;
					}

					.fader {

					}

					.scale {
						@margin-top: 7px;

						position: relative;
						height: 40px;

						.tick {
							color: darken(@sports-block-background, 30%);
							position: absolute;
							width: 10px;
							margin-left: -5px;
							text-align: center;
							position: absolute;
							font-size: 13px;
							top: 20px + @margin-top;

							&:before {
								content: '';
								position: absolute;
								left: 4px;
								top: -20px;
								width: 1px;
								height: 5px;
								background-color: darken(@sports-block-background, 30%);
							}

							&:nth-child(1) {left: 2%;}
							&:nth-child(2) {left: 25%;}
							&:nth-child(3) {left: 50%;}
							&:nth-child(4) {left: 75%;}
							&:nth-child(5) {left: 98%;}

							&:nth-child(1),
							&:nth-child(5) {
								&:before {
									top: -14px;
									height: 10px;
								}
							}

							&.active {
								color: @sports-block-header-background;

								&:before {
									background-color: @sports-block-header-background;
								}
							}
						}
					}
				}

				.bet-now {
					text-align: center;
					width: 80px;
					height: 50px;
					background-color: darken(@sports-block-background, 7%);
					margin-top: 50px;

					.amount {
						color: @sports-block-header-background;
						line-height: 30px;
					}
					.caption {
						background: @sports-block-background;
						line-height: 18px;
						text-transform: uppercase;
						font-size: 12px;
						color: darken(@sports-block-background, 60%);
						border: 1px darken(@sports-block-background, 7%) solid;
					}
				}

				.bottom-bar {
					width: 100%;
					border-top: 1px darken(@sports-block-background, 10%) solid;
					height: 35px;
					line-height: 34px;

					&>* {
						float: left;

					}

					.time {
						width: 70px;
						text-align: center;

						.amount {
							color: @highlight-color;
						}
					}

					.coefficient {
						width: ~"calc((100% - 70px - 80px - 50px) / 3)";
						padding-left: 15px;
						padding-right: 15px;

						.amount {
							float: right;
						}
					}

					.icons {
						width: 80px;
						background-color: @sports-block-background;
						text-align: center;
					//	line-height: 34px;
					}

					.all-bets {
						.link-color(darken(@sports-radio-color, 12%), 'darken');

						display: block;
						width: 50px;
						text-align: center;
					}
				}
			}
		} // end .block-content
	}

	.sidebar {
		@media @xs {display: none;}

		width: 240px;
		float: left;
		font-size: 13px;
		font-weight: 600;

		color: @sports-block-header-background;

		&.left-sidebar {
			margin-right: 10px;
		}

		&.right-sidebar {}

		&:last-child {
			margin-bottom: 0;
		}

		.block {
			.block-header {}
			.block-content {
				.coefficients {
					padding: 10px;

					.coefficient {
						width: 100%;
						border: none;
						border-bottom: 1px darken(@sports-block-background, 10%) solid;

						&:last-child {
							border: none;
						}
					}
				}
			}
		}
	}

/*
                                 /$$                           /$$
                                | $$                          | $$
  /$$$$$$$  /$$$$$$  /$$$$$$$  /$$$$$$    /$$$$$$  /$$$$$$$  /$$$$$$
 /$$_____/ /$$__  $$| $$__  $$|_  $$_/   /$$__  $$| $$__  $$|_  $$_/
| $$      | $$  \ $$| $$  \ $$  | $$    | $$$$$$$$| $$  \ $$  | $$
| $$      | $$  | $$| $$  | $$  | $$ /$$| $$_____/| $$  | $$  | $$ /$$
|  $$$$$$$|  $$$$$$/| $$  | $$  |  $$$$/|  $$$$$$$| $$  | $$  |  $$$$/
 \_______/ \______/ |__/  |__/   \___/   \_______/|__/  |__/   \___/
*/

	.content {
		float: left;
		margin-right: 10px;
		color: @content-text-color;
		font-weight: 400;


		@media @lg {width: 640px;}
		@media @md {width: 640px;}
		@media @sm {width: 640px;}
	//	@media @md {width: 440px;}
	//	@media @sm {width: 220px;}
		@media @xs {width: 100%;}

		&.xl {
			@media @xl {width: 640px !important;} // 1140px

			&.wide {
				@media @xl {width: 1140px !important;}
				@media @lg {width: 640px;}
				@media @md {width: 640px;}
				@media @sm {width: 640px;}
			//	@media @md {width: 440px;}
			//	@media @sm {width: 220px;}
				@media @xs {width: 100%;}

				margin-right: 10px;
			}
		}

		&.equal { @media @xl{width: 565px !important;} }

		&.show-lateral {
			@media @xl {display: block !important;}
			@media @lg {display: none;}
			@media @md {display: none;}
			@media @sm {display: none;}
			@media @xs {display: none;}
		}

		&.wide {
			@media @lg {width: 890px;}
			@media @md {width: 890px;}
			@media @sm {width: 890px;}
		//	@media @md {width: 690px;}
		//	@media @sm {width: 470px;}

			margin-right: 0;
		}
	}


	.lateral-content {
		@media @xl {
			width: 490px !important;
			display: block;
		}

		@media @lg {width: 640px;}
		@media @md {width: 640px;}
		@media @sm {width: 640px;}
	//	@media @md {width: 440px;}
	//	@media @sm {width: 220px;}
		@media @xs {width: 100%;}

		display: none;
		float: left;
		margin-right: 10px;

		&.equal { @media @xl{width: 565px !important;} }

		&.show-lateral {
			@media @lg {display: block;}
			@media @md {display: block;}
			@media @sm {display: block;}
			@media @xs {display: block;}

			.lateral-content-wrapper {
				opacity: 1;
			}
		}

		.lateral-content-wrapper {
			opacity: 0;
		}
	}
}

/*
                                           /$$                       /$$               /$$       /$$
                                          | $$                      | $$              | $$      | $$
  /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$   /$$$$$$$        /$$$$$$    /$$$$$$ | $$$$$$$ | $$  /$$$$$$
 /$$_____/ /$$__  $$ /$$__  $$ /$$__  $$|_  $$_/  /$$_____//$$$$$$|_  $$_/   |____  $$| $$__  $$| $$ /$$__  $$
|  $$$$$$ | $$  \ $$| $$  \ $$| $$  \__/  | $$   |  $$$$$$|______/  | $$      /$$$$$$$| $$  \ $$| $$| $$$$$$$$
 \____  $$| $$  | $$| $$  | $$| $$        | $$ /$$\____  $$         | $$ /$$ /$$__  $$| $$  | $$| $$| $$_____/
 /$$$$$$$/| $$$$$$$/|  $$$$$$/| $$        |  $$$$//$$$$$$$/         |  $$$$/|  $$$$$$$| $$$$$$$/| $$|  $$$$$$$
|_______/ | $$____/  \______/ |__/         \___/ |_______/           \___/   \_______/|_______/ |__/ \_______/
          | $$
          | $$
          |__/
*/

.sports-table {
	width: 100%;
	font-size: 14px;

	tr {
		&.hover {
			background-color: @sports-block-background;
		}

		&.date-line {
			background-color: #f4ce3c;
		}
	}

	th, td {
		height: 35px;
		vertical-align: middle;
		border-bottom: 1px darken(@sports-block-background, 10%) solid;
		padding-left: 10px;
		padding-right: 10px;
	}

	th {
	}

	thead {
		tr {
			th {
				font-weight: 400;
				border-bottom: 1px darken(@sports-block-background, 30%) solid;
				color: lighten(@content-text-color, 20%);

				&.hover {
					&.coefficient {
						background-color: lighten(@highlight-color, 15%);
						color: white;
					}
				}

				&.coefficient {
					text-align: center;
				}

				.icon {
					line-height: 31px;
					font-size: 26px;
				}
			}
		}
	}

	tbody {
		background: white;

		tr {
			&.hover {
				td {
					&.hover {
						&.coefficient {
							background-color: lighten(@highlight-color, 15%);
							border-bottom-color: lighten(@highlight-color, 10%);
							color: white !important;

							* {
								color: white !important;
							}
						}
					}
				}
			}

			&.active {
				@color: @sports-radio-color;

				background-color: @color;

				.table-icon-button {
					color: @content-text-color;
				}

				td {
					&.hide-if-active, .hide-if-active {display: none;}
					&.show-if-active, .show-if-active {display: table-cell;}

					&:last-child {
						position: relative;

						&:before {
							content: '';
							position: absolute;
							right: -14px;
							top: 14px;
							display: block;
							width: 14px;
							height: 14px;
							border-left: 7px rgba(0, 0, 0, 0.3) solid;
							border-top: 7px transparent solid;
							border-right: 7px transparent solid;
							border-bottom: 7px transparent solid;
						}

						&:after {
							content: '';
							position: absolute;
							right: -14px;
							top: 11px;
							display: block;
							width: 14px;
							height: 14px;
							border-left: 7px @color solid;
							border-top: 7px transparent solid;
							border-right: 7px transparent solid;
							border-bottom: 7px transparent solid;
						}
					}
				}
			}

			td {
				&.coefficient {
					color: @highlight-color;
					text-align: center;
					padding-left: 0;
					padding-right: 0;
					width: 50px;

					.coefficient-1 {}
					.coefficient-x {}
					.coefficient-2 {}

					&.hover {
						background-color: @sports-block-background;
					}

					&.black {
						color: black;

						a {
							color: black;
						}
					}

					a {
						display: block;
						color: @highlight-color;
						text-decoration: none;
						line-height: 34px;
					}
				}

				&.hide-if-active, .hide-if-active {}
				&.show-if-active, .show-if-active {display: none;}

				&.hot {
					position: relative;
					padding-left: 15px + 10px;

					.icon('\0053', 'before', 'icon', {
						position: absolute;
						left: 0;
						top: 0;
						display: block;
						float: left;
						width: 15px;
						text-align: center;
						height: 34px;
						line-height: 34px;
						font-size: 24px;
						background-color: @highlight-color;
						color: white;
						margin-right: 10px;
					});
				}

				&.gray {
					background-color: lighten(@sports-block-background, 3%);
				}

				&.date-n-time {
					color: darken(@sports-block-background, 40%);
					background-color: lighten(@sports-block-background, 3%);

					.highlight {
						color: @highlight-color !important;
					}
				}

				&.last-min-coefficient {
					padding-left: 0;
					padding-right: 0;

					a {
						display: block;
						min-width: 80px;
						color: @content-text-color;
						text-decoration: none;
						line-height: 34px;
						padding-left: 10px;
						padding-right: 10px;

						&:hover {
							color: white;
							background-color: @highlight-color;
						}

						.amount {
							float: right;
						}
					}
				}

				&.all-bets {
					width: 50px;
					padding-left: 0;
					padding-right: 0;
					text-align: center;

					a {
						.link-color(darken(@sports-radio-color, 12%), 'darken');

						display: block;
						line-height: 34px;
					}
				}
			}
		}
	}

	.view-all {
		a {
			.link-color(@content-text-color);

			display: block;
			text-align: center;
			line-height: 34px;
		}
	}
}


/*
             /$$                             /$$
            | $$                            |__/
  /$$$$$$$ /$$$$$$        /$$$$$$   /$$$$$$$ /$$  /$$$$$$  /$$$$$$$
 /$$_____/|_  $$_//$$$$$$|____  $$ /$$_____/| $$ |____  $$| $$__  $$
|  $$$$$$   | $$ |______/ /$$$$$$$|  $$$$$$ | $$  /$$$$$$$| $$  \ $$
 \____  $$  | $$ /$$     /$$__  $$ \____  $$| $$ /$$__  $$| $$  | $$
 /$$$$$$$/  |  $$$$/    |  $$$$$$$ /$$$$$$$/| $$|  $$$$$$$| $$  | $$
|_______/    \___/       \_______/|_______/ |__/ \_______/|__/  |__/
*/

@table-active-color: #3baf29;
@table-disabled-color: #959595;
@cell-height: 26px;

.sports-table-asian {
	width: 100%;

	tr {
		th,
		td {
			height: @cell-height;
			text-align: center;
			font-weight: 400;
			border: 1px darken(@sports-block-background, 10%) solid;
			font-weight: 600;
		}

		th {
			background-color: white;
			height: 34px;

			&.event {
				width: 250px;
			}

			&.full-time {}
			&.half-time {}

			&.one-x-two {
				width: 60px;
			}

			&.handicap {}
			&.over-under {}
			&.star {}
		}

		td {
			background-color: #fcfcfc;

			&.one-x-two {
				.arrow {
					margin-left: -8px - 3px;
				}
			}

			&.handicap {}
			&.over-under {}
			&.star {
				width: 40px;
			}

			&.coefficients {
				height: 34px;
				text-align: left;
				font-weight: 400;
				color: @content-text-color;

				a {
					color: @content-text-color;
				}

				.coefficients {
					&:last-child {
						border-bottom: none;
					}
				}
			}
		}

		&:first-child {
			th, td {
				border-top: none;
			}
		}

		&.header-row {
			&>* {background-color: #e5f4fd;}

			&:nth-of-type(2n) {
				&>* {background-color: #fff3ed;}
			}
		}
	}

	.coefficient {
		.clearfix();

		color: @sports-block-header-background;
		display: block;
		width: 100%;
		line-height: @cell-height - 1px;
	}

	.arrow {
		@up: #39b54a;
		@down: #e73c50;

		border: 4px transparent solid;
		display: inline-block;
		margin-right: 3px;

		&.up {
			border-color: @up;
			border-left-color: transparent !important;
			border-bottom-color: transparent !important;
		}

		&.down {
			border-color: @down;
			border-left-color: transparent !important;
			border-top-color: transparent !important;
		}
	}

	.half {
		float: left;
		width: 50%;
		text-align: center;

		&.black {
			color: @content-text-color;
		}
	}

	.ou {
		color: #6e7c7c;
		margin-right: 3px;
	}

	.table-star {
		position: relative;
		display: block;
		height: 50%;
		width: 100% !important;
		vertical-align: middle;
		border-bottom: 1px darken(@sports-block-background, 10%) solid;

		&:after {
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: 31px * -1 / 2;
			margin-left: 23px * -1 / 2;
		}
	}

	.all-bets {
		.link-color(@sports-block-header-background);

		display: block;
		height: 50%;

		&:before {
			content: '';
			background: transparent;
			display: block;
			width: 100%;
			height: 50%;
			margin-bottom: -18px / 2;
		}
	}

	.all-bets-block {
		display: none;

		&.active {
			display: table-row;
		}

		td {
			text-align: left;
			padding: 15px;

			.coefficient {
				color: @content-text-color;
			}
		}
	}
}

.sports-table-overview {
	width: 100%;

	tr {
		&:last-child {
			td {
				border-bottom: none;
			}
		}

		td {
			background-color: #fcfcfc;
			border: 1px darken(@sports-block-background, 10%) solid;
			border-top: none;
		}
	}

	.star {
		width: 40px;
	}

	.table-star {
		position: relative;
		display: block;
		height: 100%;
		width: 100% !important;
		vertical-align: middle;

	}

	.event-cell {
		width: 400px;
		font-size: 15px;

		&>* {
			height: 22px;
			line-height: 24px;
		}

		.time {
			font-size: 13px;
		}

		.score {}
	}

	.coefficients-cell {
		.coefficients-header {
			.clearfix();
			width: 100;

			.dropdown {
				.icon('\f078');

				display:block;
				width: auto;
				float: left;
				text-decoration:none;
				color: @content-text-color;
				padding: 5px 30px 5px 15px;

				&:after {
					font-size: 10px;
					margin-left: 5px;
				}
			}
		}

		.dropdown-with-scroll {
			float: left;
		}

		.all-bets {
			.link-color(@sports-block-header-background);

			float: right;
			line-height: 32px;
			width: 60px;
			text-align: center;
			border-left: 1px darken(@sports-block-background, 10%) solid;
		}

		.coefficients {
			border-top: 1px darken(@sports-block-background, 10%) solid;
			border-bottom: none !important;
		}
	}


}

.event-cell {
	position: relative;
	text-align: left !important;
	vertical-align: top;
	padding-left: 22px;

	.icon('\00c9', 'after', 'icon', {
			position: absolute;
			font-size: 17px;
			left: 3px;
			top: 5px;
			color: @table-active-color;
	});

	&:before {
		content: '';
		position: absolute;
		width: 1px;
		left: 9px;
		top: 27px;
		bottom: 8px;
		background-color: @table-active-color;
	}

	&>* {
		height: @cell-height;
		line-height: @cell-height;
	}

	.time {
		color: @table-active-color;
		line-height: 34px;
	}

	.team {
		display: inline-block;
		width: 150px;
	}

	.score {
		color: @sports-block-header-background;
		font-weight: 700;
	}

	.score-details {
		margin-left: 50px;

		.score {
			display: inline-block;
			width: 20px;
			color: @content-text-color;
			font-weight: 400;
			text-align: center;
		}
	}

	.top {
		line-height: 34px;
		height: 34px;
		position: absolute;
		right: 4px;
		top: 0;
		text-align: right;
	}

	.bottom {
		line-height: 34px;
		height: 34px;
		position: absolute;
		right: 4px;
		bottom: 0;
		text-align: right;
	}
}

.teams-vs-table {
	width: 100%;
	color: lighten(@content-text-color, 20%);

	.sprite-tshirt {
		vertical-align: -5px;
	}

	.icon {
		display: inline;
		width: auto;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 18px;

		&:before {
			display: inline;
		}

		&.icon-soccer-ball {
			position: relative;
			color: black;
			display: block;

			&:before {
				@size: 18px;

				position: absolute;
				left: 50%;
				top: 50%;
				margin-left: -1 * @size / 2;
				margin-top: -1 * @size / 2;
				display: inline-block;
				background: white;
				border-radius: 50%;
				width: @size;
				height: @size;
				line-height: 18px;
			}
		}
	}

	tr {
		th,
		td {
			border: 1px darken(@sports-block-background, 10%) solid;

			&:nth-child(1) {
				max-width: 0;
				padding-left: 5px;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}

			&:nth-child(n+2) {
				width: 30px;
				text-align: center;
			}

			&.gray {
				background-color: @sports-block-background;
				border-top: none;
				border-bottom: none;
			}
		}

		th {}
		td {}
	}

	thead {
		background-color: @sports-block-background;

		tr {
			th {
				line-height: 30px;

				&:nth-child(1){
					.icon('\00c9', 'before', 'icon', {
						font-size: 20px;
						line-height: 0;
						vertical-align: -3px;
						margin-right: 5px;
					});

					color: #3baf29;
				}

				&:nth-child(n+2) {}
			}
		}
	}

	tbody {
		background-color: white;

		tr {
			td, th {
				line-height: 33px;

				&:nth-child(1){
					color: @sports-block-header-background;
					font-weight: 600;
				}

				&:nth-child(n+2) {}

				&.highlight {
					color: @sports-block-header-background;
					font-weight: 800;
					font-size: 16px;
				}
			}

			&:last-child {
				td.gray {
					border-top: none;
					border-bottom: 1px darken(@sports-block-background, 10%) solid;
				}
			}
		}
	}
}

.status-bar {
	.link-color(@content-text-color);

	position: relative;
	display: block;
	padding-left: 10px;
	padding-right: 30px;
	line-height: 25px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;

	.icon('\f054', @rules: {
		position: absolute;
		right: 10px;
		top: 2px;
		font-size: 12px;
		color: lighten(@content-text-color, 20%);
	});

	&:before {
		margin-right: 10px;
	}
}


.table-icon-button {
	.link-color(darken(@sports-block-background, 30%), 'darken');

	position: relative;
	display: inline-block;
	line-height: 14px;
	width: 30px;
	font-size: 22px;
	padding-left: 5px;
	padding-right: 5px;
	text-align: center;

	&:before {
		position: relative;
		top: 4px;
	}

	&.left {
		float: left;
	}

	&.right {
		float: right;
	}
}

.menu-bar {
	@height: 35px;
	@color: darken(@sports-block-background, 55%);

	height: @height + 1;
	background-color: @sports-block-background;
	border-bottom: 1px darken(@sports-block-background, 10%) solid;
	margin-bottom: 10px;
	padding: 0 5px 0 0;
	font-size: 14px;
	color: @color;

	&>* {
		float: left;

		&.right {
			float: right;
			text-align: left;
		}
	}

	hr {
		border: none;
		height: @height;
		width: 1px;
		background-color: darken(@sports-block-background, 10%);
		margin: 0 10px;
	}

	.text {
		line-height: @height;
		font-weight: 600;
	}

	.icon-button {
		.link-color(darken(@sports-block-background, 20%), 'darken');

		line-height: @height;
		font-size: 21px;
		padding: 0 3px;

		&.one-line {
			.icon('\0079', 'after', 'icon');
		}

		&.two-lines {
			.icon('\007a', 'after', 'icon');
		}

		&.active {
			.link-color(darken(@sports-block-background, 40%), 'darken');
		}
	}

	.timer {
		.icon('\0118', 'after', 'icon', {
			position: absolute;
			right: 0;
			font-size: 28px;
		});

		position: relative;
		line-height: @height;
		width: 70px;
		font-size: 18px;
	}

	.button {
		text-transform: none;
		padding: 0 10px;
		line-height: @height - 12px;
		height: @height - 10px;
		margin-top: 5px;
	}

	.drop-down {
		display: block;
		width: auto;
		border: none;

		&#period {
			.options {
			//	min-width: 76px;
			}
		}

		&#order-by {
			.options {
				left: -67px;
			//	min-width: 153px;
			}
		}

		.selected {
			background-color: transparent;
			color: @color;
			padding: 0 20px 0 10px;
			line-height: @height;

			&:after {
				top: 0;
				right: 0;
				margin-top: 0;
			}
		}

		.options {
			li {
				a {
					background-color: @sports-block-background;
					border-color: darken(@sports-block-background, 10%);
					white-space: nowrap;
					color: @content-text-color;
					margin: 0;

					&:hover {
						color: @content-text-color;
						background-color: darken(@sports-block-background, 10%);
					}
				}
			}
		}
	}
}

.table-star {
	.link-color(darken(@sports-block-background, 40%));

	padding-left: 0;
	padding-right: 0;
	width: 30px !important;
	font-size: 26px;
	line-height: 31px;
	height: 34px;
	width: 100%;
	text-align: center;
	display: inline-block;

	.icon('\0055', 'after', 'icon');

	&.active {
		.icon('\0046', 'after', 'icon');

		color: @highlight-color;
	}

	&.right {
		display: block;
		float: right;
	}
}


.sports-main-block {

	.sidebar {
		&.left-sidebar {}
		&.right-sidebar {}
	}

	.content {}
}


.checkboxes-block {
	.clearfix();

	padding: 7px;
	display: none;

	&.active {
		display: block;
	}

	&.responsive-xl { // !!!
		label {
			@media @lg {width: ~"calc(100% / 3 - 2px * 2)";}

			@media @xs {
			//	width: ~"calc(100% / 1 - 2px * 2)";
				width: auto;
  			  	padding-right: 27px;
  			  	padding-left: 5px;
  			  	font-size: 12px;
			}

		//	@media @md {
		//		width: ~"calc(100% / 2 - 2px * 2)";
		//	}

			@media @xl {width: ~"calc(100% / 5 - 2px * 2)";}
		}
	}

	label {
		position: relative;
		display: block;
		width: ~"calc(100% / 3 - 2px * 2)";
		float: left;
		background-color: lighten(@sports-block-background, 5%);
		height: 30px;
		line-height: 30px;
		margin: 2px;
		padding: 0 12px;
		overflow: hidden;

		input[type=checkbox] {
			display: inline-block;
			line-height: 24px;
			position: absolute;
			right: 7px;
			top: 1px;
		}
	}
}

.links-block {
	&.portbook-euroversion {
		.clearfix();

		padding: 10px;
		background-color: darken(@sports-block-background, 5%);

		a {////
			float: left;
			width: 100% / 5;
			height: 25px;
			line-height: 25px - 2px;
			text-align: center;
			background-color: @sports-block-background;
			border: 1px darken(@sports-block-background, 10%) solid;
			border-right-color: lighten(@sports-block-background, 10%);
			border-top-color: lighten(@sports-block-background, 10%);
			color: @content-text-color;
			font-size: 13px;
			text-decoration: none;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			padding: 0 5px;

			&:hover {background-color: darken(@sports-block-background, 5%);}
			&:active {background-color: @sports-block-background;}
		}
	}
}

.drop-down {
	&.sidebar-dd {
		margin-bottom: 10px;
		border-color: darken(@sports-block-background, 50%);
		width: 100%;

		.selected {
			background-color: white;
			color: @content-text-color;
		}

		.options {
			background-color: white;

			li {
				a {
					border-color: darken(@sports-block-background, 50%);
					line-height: 1;
					color: @content-text-color;

					&:hover {
						background-color: @sports-block-background;
						color: @content-text-color;
					}
				}
			}
		}
	}
}

.multi-view-block {
	.clearfix();

	min-height: 100%;
	margin: -5px;

	.event-column {
		float: left;
		width: ~"calc(100% / 2 - 10px)";
//		min-height: 300px;
		margin: 5px;
		padding-bottom: 150px;

		.sortable-placeholder {
			position: relative;
			height: 150px;
			margin-bottom: 10px;
			background-color: rgba(0, 0, 0, 0.3);

			.icon('\006b', 'before', 'icon', {
				position: absolute;
				left: 50%;
				top: 50%;
				font-size: 60px;
				line-height: 1;
				margin-left: -1 * 48px / 2;
				margin-top: -1 * 60px / 2 - 10px;
				color: @sports-background;
			});

			&:after {
				content: 'Drag event here';
				position: absolute;
				left: 0;
				top: 50%;
				width: 100%;
				margin-top: 25px;
				text-align: center;
				display: block;
				color: @sports-background;
			}
		}

		.event-frame {
			position: relative;
			width: 100%;
			min-height: 300px;
			margin-bottom: 10px;

			.bets-block {
				&.expanded {
					.block-header {
						.icon-arrow-o-up {display: inline-block;}
						.icon-arrow-o-down {display: none;}
					}

					.coefficients-block {
						max-height: 1500px !important;
					}
				}

				.block-header {
					.icon-arrow-o-up {display: none;}
					.icon-arrow-o-down {display: inline-block;}

					cursor: move;
				}

				.block-content {
					.coefficients-block {
						background-color: #dfdfdf;
					}
				}
			}

			&.drag-here {
				.bets-block {
					.icon('\006b', 'before', 'icon', {
						display: block;
						height: 150px;
						line-height: 150px - 20px;
						font-size: 60px;
						text-align: center;
						color: @sports-background;
						background-color: rgba(0, 0, 0, 0.5);
						margin-bottom: 10px;
					});

					&:after {
						content: 'Drag event here';
						position: absolute;
						left: 0;
						top: 150px / 2 + 25px;
						width: 100%;
						text-align: center;
						display: block;
						color: @sports-background;
					}
				}
			}

			&.empty-event-frame.drag-here {
				background-color: rgba(0, 0, 0, 0.3);

				.icon('\006b', 'before', 'icon', {
					position: absolute;
					left: 50%;
					top: 50%;
					font-size: 60px;
					line-height: 1;
					margin-left: -1 * 48px / 2;
					margin-top: -1 * 60px / 2 - 10px;
					color: @sports-background;
				});

				&:after {
					content: 'Drag event here';
					position: absolute;
					left: 0;
					top: 50%;
					width: 100%;
					margin-top: 25px;
					text-align: center;
					display: block;
					color: @sports-background;
				}
			}

			&.empty-event-frame.drag-hover {
				background-color: rgba(0, 0, 0, 0.5);
			}

			&.loading {
				background-color: rgba(0, 0, 0, 0.5);

				.icon('\f021', @rules: {
					@size: 30px;

					.rotation(0.7s, ease);

					color: white;
					position: absolute;
					z-index: 2001;
					font-size: @size;
					line-height: 1;
					left: 50%;
					top: 50%;
					margin-left: -1 * @size /2;
					margin-top: -1 * @size /2;
				});
			}
		}
	}

	&.two {
		.event-column {
			&:nth-child(n+3) {display: none;}
		}
	}

	&.three {
		.event-column {
			width: ~"calc(100% / 3 - 10px)";

			&:nth-child(n+4) {display: none;}
		}
	}

//	height: 100%;
//	margin: -5px;
//
//	&.four {
//		.event-frame {
//			width: ~"calc(100% / 4 - 10px)";
//
//			&:nth-child(n+9) {display: none;}
//		}
//	}
//
//	&.three {
//		.event-frame {
//			width: ~"calc(100% / 3 - 10px)";
//
//			&:nth-child(n+7) {display: none;}
//		}
//	}
//
//	&.two {
//		.event-frame {
//			width: ~"calc(100% / 2 - 10px)";
//
//			&:nth-child(n+5) {display: none;}
//		}
//	}
//
//	.event-frame {
//		float: left;
//		background: blue;
//		height: ~"calc(100% / 2 - 10px)";
//		width: ~"calc(100% / 3 - 10px)";
//		margin: 5px;
//	}

}

.leagues-selector-block {
	.clearfix();

	position: relative;

	.country,
	.leagues {
		float: left;
		height: 300px;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	.country {
		width: 190px;
		padding-right: 10px;

		.search {
			position: absolute;
			left: 0;
			top: 0;
			width: 180px;
			padding: 5px;
			background-color: @sports-block-background;
			border-bottom: 1px darken(@sports-block-background, 10%) solid;
			z-index: 5;

			input {
				width: 100%;
				display: block;
				height: 25px;
			}
		}

		.list {
			padding-top: 36px;

			.item {
				text-overflow: ellipsis;
				word-wrap: break-word;
				overflow: hidden;
			}
		}
	}

	.leagues {
		width: ~"calc(100% - 190px)";
		padding-right: 10px;
		overflow-x: hidden;
		overflow-y: hidden;
	}
}

.coefficient-highlight {
	text-decoration: none;
	color: @content-text-color;
	cursor: pointer;



	&:hover {
		color: white !important;
		background-color: lighten(@highlight-color, 15%) !important;
		text-decoration: none;

		* {
			color: white !important;
		}

		.arrow {
			&.up, &.down {
				border-color: white;
			}
		}
	}

	&.active {
		background-color: @highlight-color !important;
		color: white !important;

		.amount {
			color: white !important;
		}

		&:hover {
			background-color: lighten(@highlight-color, 3%) !important;
		}
	}

	&:focus {
		text-decoration: none;
	}
}

.disabled {
	.coefficient-highlight {
		&:hover {
			color: inherit !important;
			background-color: inherit !important;

			* {
				color: inherit !important;
			}
		}
	}
}

.columns {
	.one-column {
		.column {}
	}

	.two-columns {
		.clearfix();

		.column {
			width: 100% / 2;
			float: left;

			&:nth-child(1) {border-right: 5px transparent solid;}
			&:nth-child(2) {border-left: 5px transparent solid;}
		}
	}

	.three-columns {
		.clearfix();

		.column {
			width: 100% / 3;
			float: left;

			&:nth-child(1) {
				border-right: 5px transparent solid;
			}

			&:nth-child(2) {
				border-left: 5px transparent solid;
				border-right: 5px transparent solid;
			}

			&:nth-child(3) {
				border-left: 5px transparent solid;
			}
		}
	}
}

.frame {
	padding: 10px;

	&>*{
		&:first-child {margin-top: 0;}
		&:last-child {margin-bottom: 0;}
	}

	&.white {
		background-color: white;

		.block-divider {
			background-color: white !important;
		}
	}

	&.gray {
		background-color: darken(@sports-background, 10%);

		.block-divider {
			background-color: darken(@sports-background, 10%) !important;
		}
	}

	.block-divider {}
}

.widget-futbol {
	height: 190px;
	width: 100%;
	display: block;
}

.favourites-palceholder {
	background-color: @sports-block-background;
	color: darken(@sports-block-background, 40%);
	text-align: center;
	padding: 7px;
	margin: 5px 50px !important;
}

.coefficients-block {
	max-height: 375px;
	overflow: hidden;
}

.sports-multi-slect-block {
	width: 255px;
	height: 83px;
	border: 2px @sports-block-header-background solid;
	margin-right: 10px;
	user-select: none;
	cursor: default;
	font-size: 14px;
	color: lighten(@content-text-color, 10%);

	&:hover {
		.block-header {
			background-color: white;
		}

		.block-content {
			background-color: @sports-block-background;

			.line {
				border-color: darken(@sports-block-background, 10%);
			}
		}
	}

	&.draggable {
		position: absolute !important;
		left: 100px;
		top: 100px;
		box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
		z-index: 999999;

		.block-header {
			background-color: white;
		}

		.block-content {
			background-color: @sports-block-background;

			.line {
				border-color: darken(@sports-block-background, 10%);
			}
		}
	}

	.block-header {
		height: 25px;
		line-height: 25px;
		background-color: @sports-block-background;
		padding-left: 10px;
		font-weight: 600;
		color: #3baf29;
		cursor: move;

		.lateral {
			float: right;

			.table-icon-button {
				line-height: 0;
				font-size: 20px;

				&.active {
					color: @sports-block-header-background;
				}
			}
		}
	}

	.block-content {
		background-color: white;
		cursor: pointer;

		.line {
			height: 27px;
			line-height: 27px;
			border-bottom: 1px @sports-block-background solid;
			padding-left: 10px;
			padding-right: 10px;

			.lateral {
				float: right;
				color: @sports-block-header-background;
				font-weight: 700;
			}
		}
	}

	.decorate-sports-block(@color){
		border-color: @color;
	}

	&.soccer {.decorate-sports-block(@soccer-color);}
	&.tennis {.decorate-sports-block(@tennis-color);}
	&.handball {.decorate-sports-block(@handball-color);}
	&.volleyball {.decorate-sports-block(@volleyball-color);}
	&.scorer {.decorate-sports-block(@scorer-color);}
	&.basketball {.decorate-sports-block(@basketball-color);}
	&.rugby {.decorate-sports-block(@rugby-color);}
	&.formula-1 {.decorate-sports-block(@formula-1-color);}
	&.badminton {.decorate-sports-block(@badminton-color);}
	&.baseball {.decorate-sports-block(@baseball-color);}
	&.boxing {.decorate-sports-block(@boxing-color);}
	&.cycling {.decorate-sports-block(@cycling-color);}
	&.golf {.decorate-sports-block(@golf-color);}
	&.cricket {.decorate-sports-block(@cricket-color);}
	&.table-tennis {.decorate-sports-block(@table-tennis-color);}
	&.poker {.decorate-sports-block(@poker-color);}
	&.american-football {.decorate-sports-block(@american-football-color);}
}

.sprite-tshirt {
	display: inline-block;
	width: 16px;
	height: 19px;
	background-repeat: no-repeat;
	background-position: center center;
	margin-right: 8px;
	line-height: 33px;
}

.groups-description {
	padding: 0 10px 10px 10px;
	color: lighten(@content-text-color, 20%);

	.description {
		position: relative;
		font-size: 13px;
		border: 1px darken(@sports-block-background, 30%) solid;
		border-top: none;
		padding: 5px 10px 5px 30px;

		&:before {
			content: '';
			display: block;
			width: 5px;
			height: 5px;
			position: absolute;
			left: 16px;
			top: 11px;
			background-color: darken(@sports-block-background, 30%);
		}
	}
}

.table-verification-wrapper {
	max-height: 400px;
	overflow: hidden;
}

.table-verification {
	width: 100%;
	font-size: 13px;
	border-top: 1px #d0d0d0 solid;

	.drop-down {
		.drop-down-style(
			white,
			@content-text-color,
			@content-text-color,
			@width: 55px,
			@rules: {
				display: inline-block;
				margin-left: 5px;

				.selected {
					padding: 1px 20px 1px 10px;
				}

				.options {
					li {
						a {
							padding: 1px 10px;
						}
					}
				}
			}
		);
	}

	tr {
		th,
		td {
			text-align: center;
			padding: 5px;
			box-sizing: border-box;

			&.left {
				text-align: left;
			}
			&.right {
				text-align: right;
			}

			&.strong, &.str {
				font-weight: 700;
			}

			&.highlight {
				font-size: 14px;
				color: @sports-block-header-background;
			}
		}

		th {}
		td {}
	}

	thead {
		tr {
			th{
				background-color: #dbdbdb;
				font-weight: 400;
				color: lighten(@content-text-color, 15%);
				border: 1px #dbdbdb solid;

				&:first-child {border-left: none;}
				&:last-child {border-right: none;}
			}

			td {}
		}
	}

	tbody {

		tr {
			&.light {
				td {
					background-color: #f3f3f3;
				}
			}

			td {
				border: 1px white solid;
				background-color: #e6e6e6;

				&:first-child {border-left: none;}
				&:last-child {border-right: none;}
			}
		}
	}

	tfoot {
		tr {
			&.light {
				td {
					background-color: #f3f3f3;
				}
			}

			td {
				border: 1px white solid;
				background-color: #e6e6e6;

				&:first-child {border-left: none;}
				&:last-child {border-right: none;}
			}
		}
	}

	thead, tbody {
		tr:first-child {
			&>*:nth-child(1){width: 40px;}
			&>*:nth-child(2){}
			&>*:nth-child(3){width: 120px;}
			&>*:nth-child(4){width: 65px;}
			&>*:nth-child(5){width: 55px;}
			&>*:nth-child(6){width: 80px;}
			&>*:nth-child(7){width: 110px;}
			&>*:nth-child(8){width: 140px;}
		}
	}


	tfoot {
		tr {
			&>*:nth-child(1) {}
			&>*:nth-child(2) {width: 110px;}
			&>*:nth-child(3) {width: 140px;}
		}
	}
}

.verification-bottom-bar {
	padding: 12px;
	min-height: 25px + 12px * 2;

	.table-icon-button {
		.link-color(#6e7c7c);

		margin-right: 10px;
		line-height: 25px;

		&:before {
			position: static;
		}
	}

	.button {
		.hover(#3baf29);

		height: 25px;
		line-height: 25px;
	}

	.right {
		float: right;
	}
}

.table-euroversion {
	@cell-width: 50px;

	.clearfix();

	width: 100%;
	font-size: 13px;

	.cell {
		float: left;
		line-height: 35px - 2px;

		.loop (@index) when (@index > 0) {
			&.x@{index} {min-width: @cell-width * @index !important;}
			.loop(@index - 1);
		}
		.loop (0) {}
		.loop(15);

		&.star,
		&.id,
		&.time {
			text-align: center;
		}

		&.star  {
			color: #5894bf; width: 35px;
			line-height: 1;

			.icon {
				width: 30px;
				line-height: 35px - 2px;
				font-size: 26px;
			}

			.table-star {
				color: #5894bf;
				line-height: 35px - 2px;
			}
		}

		&.id    {color: #f26d7d; width: 60px;}
		&.time  {color: #39b54a; width: 60px;}

		&.event {
			color: #000000;
			width: ~"calc(100% - 35px - 60px - 60px)";
			border-right: 1px lighten(@sports-block-background, 10%) solid;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}

		&.fader-cell {
			padding-left: 10px;
			padding-right: 10px;
			height: 100%;
			padding-top: 12px;
		}

		.coefficient-with-score {
			text-align: right;
			padding: 0 10px;

			.score {
				color: @sports-block-header-background;
				float: left;

				background-color: rgba(255, 255, 255, 0.4);
				padding: 2px 4px;
				border-radius: 3px;
				margin-top: 8px;
				line-height: 1;
			}
		}
	}

	.row-head-date,
	.row-head,
	.row-normal {
		.clearfix();
	}

	.row-head-date {
		background-color: #c3d4d3;
		line-height: 25px;

		.cell {
			line-height: 25px;
		}
	}

	.row-head {
		height: 35px;
		background-color: darken(@sports-block-background, 5%);
		border-top: 1px lighten(@sports-block-background, 10%) solid;
		border-bottom: 1px darken(@sports-block-background, 14%) solid;

		.cell {
			&.star {}
			&.id {}
			&.time {}
			&.event {}
		}
	}

	.row-normal {
		@row-height: 35px;

		height: @row-height;
		background-color: @sports-block-background;
		border-top: 1px lighten(@sports-block-background, 10%) solid;
		border-bottom: 1px darken(@sports-block-background, 14%) solid;

		.loop (@index) when (@index > 0) {
			&.x@{index} {
				height: @row-height * @index;
			//	padding-top: (@row-height * @index / 2) - 2 - (@row-height / 2 - 2);

				.cell {
					line-height: (@row-height * @index) - 2px;
					height: (@row-height * @index) - 2px;

					.table-icon-button {
						line-height: (@row-height * @index) - 2px !important;
					}

					.coefficient-highlight {
						line-height: (@row-height * @index) - 2px !important;
					}
				}
			}
			.loop(@index - 1);
		}
		.loop (0) {}
		.loop(50);

		&.expanded {
			margin-bottom: 470px;
		}

		&.hover {
			.cell {
				background-color: @sports-block-background !important;
			}
		}

		.cell {
			&.star {}
			&.id {}
			&.time {}
			&.event {}

			&.hover {
				background-color: @sports-block-background !important;
			}
		}
	}

	.row-scrollbar {
		height: 16px;
		background-color: @sports-block-background;
		border: 1px darken(@sports-block-background, 14%) solid;
		border-top-color: lighten(@sports-block-background, 10%);
		border-right-color: lighten(@sports-block-background, 10%);
	}

	.left-part,
	.scrollable-part,
	.right-part {
		.clearfix();

		display: inline-table;
	}

	.left-part {
		width:55%;
		.row-head-date {
			padding-left: 5px;
		}

		.row-normal {
			&.hover {
				.cell {
				//	background-color: darken(@sports-block-background, 5%) !important;
				}
			}
		}
	}

	.scrollable-part {
		overflow: hidden;
        min-width:37%;
		.row-head-date,
		.row-head,
		.row-normal,
		.row-scrollbar {
			text-align: center;
		}

		.row-head {
			.cell {

				&.first {border-left: 1px darken(@sports-block-background, 14%) solid;}
				&.last {border-right: 1px lighten(@sports-block-background, 10%) solid;}

				&.hover {
					color: white !important;
					background-color: lighten(@highlight-color, 15%) !important;
				}
			}
		}

		.row-normal {
			.cell {
				background-color: white;
				border-right: 1px lighten(@sports-block-background, 10%) solid;
				border-left: 1px darken(@sports-block-background, 14%) solid;

				a {
					display: block;
					line-height: 35px - 2px;
				}
			}
		}

		.cell {
			width: @cell-width;
		}

		.nicescroll-rails-hr { // MP
			bottom: 4px !important;
		}
	}

	.right-part {
		width: 7.7%;

		.row-head-date {
		}

		.row-head {
			border-left: 1px darken(@sports-block-background, 14%) solid;
		}

		.row-normal {
			position: relative;
			border-left: 1px darken(@sports-block-background, 14%) solid;
			background-color: white;

			&.hover {
				.cell {
					background-color: inherit !important;
				}
			}
		}

		.cell {
			width: 100%;
		}
	}

	.buttons-cell {
		margin-left: -1px;
		margin-right: -1px;

		.table-icon-button {
			position: relative;
			width: 50%;
			display: block;
			float: left;
			line-height: 35px - 2px;
			font-size: 20px;
			padding: 0;

			&:before {position: static;}

			&:after {
				content: ' ';
				display: block;
				width: 1px;
				height: 20px;
				position: absolute;
				right: 0;
				top: 50%;
				margin-top: 20px * -1 / 2;

				background-color: darken(@sports-block-background, 10%);
			}

			&:last-child {
				&:after {
					display: none;
				}
			}

			&.pie-chart {color: #5894bf;}
			&.fold-row {color: #ca5555; display: none;}
		}

		.all-bets {
			.link-color(@content-text-color);

			display: block;
			width: 50%;
			text-align: center;
			float: left;
		}
	}

	.expanded {
		.table-accordion {
			display: block;
		}

		.buttons-cell {
			.all-bets {display: none;}
			.fold-row {display: block;}
		}
	}

	.table-accordion {
		display: none;
		background-color: darken(@sports-block-background, 5%);
		height: 470px;
		position: absolute;
		bottom: -470px;
		right: 0;
		padding: 15px 65px 15px 15px;

		.fold {
			.icon.icon-arrow-double-up;
			.link-color(#ca5555);

			position: absolute;
			right: 15px;
			top: 50%;
			display: block;
			font-size: 20px;
			margin-top: 24px * -1 / 2;
		}

		.accordion-euroversion {
			overflow: hidden;
			height: 470px - 15px * 2;

			.panel-group {
				margin-bottom: 3px;

				&.active {
					.panel-header {
						&:after {
							content: '\2212';
						}
					}
					.panel-body {
						display: block;
					}
				}

				.panel-header {
					background-color: @sports-block-background;
					padding: 0 12px;
					line-height: 35px - 2px;
					text-transform: uppercase;
					border: 1px darken(@sports-block-background, 10%) solid;
					border-top-color: lighten(@sports-block-background, 10%);
					border-right-color: lighten(@sports-block-background, 10%);
					cursor: pointer;

					&:after {
						content: '+';
						float: right;
						font-size: 18px;
					}

					&:hover {
						background-color: lighten(@sports-block-background, 5%);
					}
				}

				.panel-body {
					display: none;
					padding: 0;

					table {
						border-collapse: separate;
						width: 100%;

						td, th {
							text-align: center;
							border: 1px darken(@sports-block-background, 13%) solid;
							border-top-color: lighten(@sports-block-background, 3%);
							border-right-color: lighten(@sports-block-background, 3%);
						}

						th {
							background-color: darken(@sports-block-background, 7%);
						}

						thead {
							tr {
								td, th {
									height: 35px;
									font-weight: 400;
									border-left: none;
									border-right: none;

									&:first-child {border-left: 1px darken(@sports-block-background, 13%) solid;}
									&:last-child {border-right: 1px lighten(@sports-block-background, 3%) solid;}
								}
							}
						}

						tbody {
							tr {
								td, th {
									height: 55px;
								}

								th {
									font-weight: 700;
								}

								td {
									background-color: @sports-block-background;

									a {
										display: block;
										line-height: 55px - 2px;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

.folded-all-sports-sidebar {
	width: 40px;

	.block {

		.block-header {
			padding: 0 !important;

			&:before {
				width: 100% !important;
				margin-right: 0 !important;
			}

			.caption {
				display: none;
			}
		}

		.block-content {
			.tabs {
				.tab {
					display: none;
					width: 100% !important;
					padding: 0 2px;


					&.active {
						display: block;
					}

					a {
						display: block;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}

			.list {
				&.hierarchical-list {

					&>li {
						position: relative;

						&>.item {
							padding-left: 0 !important;

							&:before {
								width: 40px !important;
								margin-right: 0 !important;
							}

							&>.caption {display: none;}
							&>.number {display: none;}
						}

						&.active {
							&>ul {
								display: block;
							}

							&>.item {
								color: white;
								background-color: @lateral-1-level-active;
								border-top: 1px lighten(@lateral-1-level-active, 10%) solid;
								border-bottom: 1px darken(@lateral-1-level-active, 10%) solid;
								width: 220px + 40px;

								.caption {
									display: inline;
								}

								.number {
									display: inline;
									color: white;
								}

								.chevron {
									.icon('\f078');
								}
							}
						}

						&>ul {
							display: none;
							position: absolute;
							left: 40px;
							top: 34px;
							width: 220px;
							height: 34px * 8;

							&>li {
								position: relative;

								&.active {
									&>ul {
										display: block;
									}

									&>.item {
										color: @content-text-color;
										background-color: @lateral-2-level-active;
										border-top: 1px lighten(@lateral-2-level-active, 10%) solid;
										border-bottom: 1px darken(@lateral-2-level-active, 10%) solid;

										.number {
											color: @content-text-color;
										}

										.chevron {
											.icon('\f078');

											display: block;
										}
									}
								}

								&>.item {
									color: @content-text-color;
									background-color: darken(@sports-block-background, 5%);
									border-top: 1px lighten(@sports-block-background, 5%) solid;
									border-bottom: 1px darken(@sports-block-background, 15%) solid;
								}

								&>ul{
									display: none;

									&>li {
										&>.item {
											color: @content-text-color;
											background-color: darken(@sports-block-background, 10%);
											border-top: 1px lighten(@sports-block-background, 0%) solid;
											border-bottom: 1px darken(@sports-block-background, 20%) solid;
										}
									}
								}
							}
						}
					}

				}
			}
		}
	}
}