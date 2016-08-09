// JavaScript source code
var VMPMapmap = null;


//var taiwan = { name: "臺灣", lat: 23.9036873, lng: 121.0793705, zoom: 8 };
var taiwan = { name: "基隆",lat: 25.132677, lng: 121.746782, zoom: 10 };

var imageBlue = 'themes/images/b11.png';
var imageRed = 'themes/images/r11.png';
var imageGreen = 'themes/images/g11.png';
var currKey = 0;

// 标记集合
var clearMarkers = [];
var clearOverViews = [];

var limitMain = 10;
var limitSub = 13;
//var infowindow;

/**
/*google 地图--------------------------
*/
function VMPMapinitGoogleMap( objData )
{
    VMPMapmap = new google.maps.Map( document.getElementById( 'map' ), {
        center: { lat: taiwan.lat, lng: taiwan.lng }
        , zoom: taiwan.zoom
        , mapTypeControl: false
        , streetViewControl: false
        , zoomControl: true
        , maxZoom: 18
        , minZoom: 8
        //, scrollwheel: false
        //, disableDoubleClickZoom:false
    } );
    //var marker = new google.maps.Marker( {
    //    position:  { lat: taiwan.lat, lng: taiwan.lng },
    //    label: "123123123123123",
    //    map: VMPMapmap
    //} );

    //infowindow = new google.maps.InfoWindow(
    //{
    //    content: ""
    //} );

    drawFlag( mainOffice, imageRed )

    VMPMapmap.addListener( 'zoom_changed', function ()
    {
        //console.log( VMPMapmap.getZoom() )
        setMapOnAll( null )

        if ( VMPMapmap.getZoom() <= limitMain )
        {
            drawFlag( mainOffice, imageRed )
        }
        else if ( VMPMapmap.getZoom() <= limitSub )
        {
            drawFlag( subOffice, imageBlue )
        }
        else if ( VMPMapmap.getZoom() > limitSub )
        {
            drawFlag( endOffice, imageGreen )
        }
    } );

    // 区域范围
    var boundsContent = new google.maps.LatLngBounds(
 new google.maps.LatLng( 22.045625, 119.204045 ),//南
 new google.maps.LatLng( 25.379466, 122.587834 )//东
        );

    //设置地图显示范围
    VMPMapmap.addListener( 'dragend', function ()
    {
        checkMapBounds( VMPMapmap, boundsContent )
    } );
}


// 移除所有标记
function setMapOnAll( map )
{
    for ( var i = 0; i < clearMarkers.length; i++ )
    {
        clearMarkers[i].setMap( map );
    }

    for ( var i = 0; i < clearOverViews.length; i++ )
    {
        clearOverViews[i].setMap( map );
    }
}

// 添加标记
function drawFlag( dataContent, image, key )
{
    var currentContent = [];
    if ( key != null )
    {
        for ( var i = 0; i < dataContent.length; i++ )
        {
            if ( dataContent[i].pkey == key )
            {
                currentContent.push( dataContent[i] )
            }
        }
    }
    else
    {
        currentContent = dataContent;
    }

    for ( var i = 0; i < currentContent.length; i++ )
    {
        var data = currentContent[i];

        //console.log(data)
        var coordinate = { lat: data.lat, lng: data.lng }

        var beachMarker = new google.maps.Marker( {
            position: coordinate,
            map: VMPMapmap,
            icon: {
                url: image
            }
            //icon: {
            //    path: google.maps.SymbolPath.CIRCLE,
            //    scale: 14
            //    , fillColor: 'red',
            //    fillOpacity: 1,
            //    strokeColor: 'red'
            //}
            , animation: google.maps.Animation.DROP
            // ,label :"基隆分局"
        } );
        clearMarkers.push( beachMarker )
        showinfomessage( beachMarker, data )

        //var marker = new google.maps.Marker( {
        //    position: coordinate,
        //    map: VMPMapmap,
        //    title: 'Hello World!'
        //} );

        var overlay = new MarkerShow( VMPMapmap, coordinate, data );
        clearOverViews.push( overlay )
    }
}

// 显示信息
function showinfomessage( marker, data )
{
    var infowindow = new google.maps.InfoWindow(
      {
          content: "<div><h3>" + data.name + "</h3><p>" + " ［手槍］ 在庫" + data.gun1in + ",  出勤" + data.gun1out + ",  <lable style='color:red'> 異常"+data.errorCount+"</lable>"  +"</p><p>" + " ［長槍］ 在庫" + data.gun2in + ",  出勤" + data.gun2out + ",  <lable style='color:red'> 異常"+data.errorCount+"</lable>"  + "</p></div>" 
      } );

    // 顯示提示信
    google.maps.event.addListener( marker, 'mouseover', function ( event )
    {
        infowindow.open( map, marker );
    } );

    // 隱藏提示信息
    google.maps.event.addListener( marker, 'mouseout', function ( event )
    {
        infowindow.close();
    } );

    // 單擊事件
    google.maps.event.addListener( marker, 'click', function ( event )
    {
        if ( data.level == 1 )
        {
            VMPMapmap.setZoom( limitSub )
            var coordinate = { lat: data.lat, lng: data.lng }
            VMPMapmap.setCenter( coordinate )

            //drawFlag( subOffice, imageBlue, data.key )
        }
        else if ( data.level == 2 )
        {
            VMPMapmap.setZoom( limitSub + 2 )
            var coordinate = { lat: data.lat, lng: data.lng }
            VMPMapmap.setCenter( coordinate )

            // drawFlag( endOffice, imageGreen, data.key )
        }
        else
        {
            VMPMapmap.setZoom( taiwan.zoom )
            var coordinate = { lat: data.lat, lng: data.lng }
            VMPMapmap.setCenter( coordinate )
            //drawFlag( mainOffice, imageRed )
        }
    } );
}


//限制地图的显示范围
function checkMapBounds( map, mapRange )
{
    if ( map )
    {
        if ( mapRange.contains( map.getCenter() ) )
        {
            return;
        }

        var center = map.getCenter();
        var centerX = center.lng();
        var centerY = center.lat();

        var maxX = mapRange.getNorthEast().lng();
        var maxY = mapRange.getNorthEast().lat();
        var minX = mapRange.getSouthWest().lng();
        var minY = mapRange.getSouthWest().lat();

        if ( centerX < minX ) { centerX = minX; }
        if ( centerX > maxX ) { centerX = maxX; }
        if ( centerY < minY ) { centerY = minY; }
        if ( centerY > maxY ) { centerY = maxY; }

        // map.panTo( new google.maps.LatLng( centerY, centerX ) );
        map.setCenter( { lat: taiwan.lat, lng: taiwan.lng } )
    }
}
