 var map = new AMap.Map('container', {
	        resizeEnable: true, //是否监控地图容器尺寸变化
	        zoom:11, //初始化地图层级
	        center: [116.397428, 39.90923] ,//初始化地图中心点
	    });
AMap.plugin([
    'AMap.ToolBar',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.MapType',
    'AMap.Geolocation',
], function(){
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar());

    // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
    map.addControl(new AMap.Scale());

    // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
    map.addControl(new AMap.OverView({isOpen:true}));
   
    // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    map.addControl(new AMap.MapType());
   
    // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
    map.addControl(new AMap.Geolocation());
});
AMap.plugin('AMap.CitySearch', function () {
  var citySearch = new AMap.CitySearch()
  citySearch.getLocalCity(function (status, result) {
    if (status === 'complete' && result.info === 'OK') {
      // 查询成功，result即为当前所在城市信息
    }
  })
})
AMap.plugin('AMap.Weather', function() {
    //创建天气查询实例
    var weather = new AMap.Weather();

    //执行实时天气信息查询
    weather.getLive('杭州市', function(err, data) {
        console.log(err, data);
    });
});