
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

// app.get('/', function(req, res){

	// 	var brandCount = 0;
	// 	var itemMetaCount = 0;
	// 	var skuMetaCount = 0;
	// 	var skuCount = 0;
	// 	var shopCount = 0;
	// 	var tradeCount = 0;

	// 	async.series([
	// 		function(callback){
	// 			Brand.getAllCount(function(err, count){
	// 				if(count){
	// 					brandCount = count;
	// 				}
	// 				callback();
	// 			});
	// 		},

	// 		function(callback){
	// 			ItemMeta.getAllCount(function(err,count){
	// 				if(count){
	// 					itemMetaCount = count;
	// 				}
	// 				callback();
	// 			});
	// 		},

	// 		function(callback){
	// 			SkuMeta.getAllCount(function(err,count){
	// 				if(count){
	// 					skuMetaCount = count;
	// 				}
	// 				callback();
	// 			});
	// 		},

	// 		function(callback){
	// 			res.render('index', { title: '首页', brandCount : brandCount, itemMetaCount : itemMetaCount, skuMetaCount : skuMetaCount, skuCount : skuCount, shopCount : shopCount, tradeCount : tradeCount});
	// 			callback();
	// 		}
	// 	], function(err){
	// 		console.log(err);
	// 	});
	// });

	// app.get('/sendMsg', function(req, res){
	// 	res.render('sendMsg', {title: '发送消息', server: sys_settings.server});
	// });

	// app.get('/startScan', function(req, res){
	// 	res.render('startScan', {title: "扫描发送消息", pageToken: sys_settings.monitorToken, server: sys_settings.server});
	// });

	// app.get('/brandshome', function(req, res){
		
	// 	var brands;
	// 	async.series([
	// 		function(callback){
	// 			Brand.getAll(function(err, results){
	// 				if(results){
	// 					brands = results;
	// 				}
	// 				callback();
	// 			});
	// 		},

	// 		function(callback){
	// 			async.each(brands, function(brand, callback){
	// 				async.series([
	// 					function(callback){
	// 						ItemMeta.getCountByBrand(brand.tid, function(err, count){
	// 							brand.itemMetaCount = count;
	// 							callback();
	// 						});
	// 					},

	// 					function(callback){
	// 						SkuMeta.getCountByBrand(brand.tid, function(err, count){
	// 							brand.skuMetaCount = count;
	// 							callback();
	// 						});
	// 					}
	// 				], function(err){
	// 					if(err){
	// 						console.log(err);
	// 					}
	// 					callback();
	// 				});
					
	// 			}, function(err){
	// 				console.log(err);
	// 				callback();
	// 			});
	// 		},

	// 		function(callback){
	// 			res.render('brandsHome', {title : '品牌', brands : brands});
	// 			callback();
	// 		}

	// 	], function(err){
	// 		console.log(err);
	// 	});
	// });

	// app.get('/itemmetashome', function(req, res){
	// 	res.render('itemMetasHome', {title : '物料'});
	// });

	// app.get('/skumetashome', function(req, res){
	// 	res.render('skuMetasHome', {title : 'SKU'});
	// });

	// app.get('/skushome', function(req, res){
	// 	res.render('skusHome', {title : '商品'});
	// });

	// app.get('/shopshome', function(req, res){
	// 	res.render('shopsHome', {title : '店铺'});
	// });