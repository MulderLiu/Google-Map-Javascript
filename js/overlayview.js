// 物件標記
function MarkerShow( map, coordinate, data )
{
    var bounds = new google.maps.LatLngBounds(
     new google.maps.LatLng( coordinate.lat, coordinate.lng ),
     new google.maps.LatLng( coordinate.lat, coordinate.lng ) );

    var zoom = map.getZoom();
    this.datas_=data
    this.bounds_ = bounds;
    this.map_ = map;
    this.setMap( map );
    this.div_ = null;
}

// 继承自  google.maps.OverlayView
MarkerShow.prototype = new google.maps.OverlayView();

// 標記信息
MarkerShow.prototype.onAdd = function ()
{
    var div = document.createElement( 'div' );
    div.style.borderStyle = 'none';
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';
  //  div.style.backgroundColor = "blue"
    var zoom = this.map.getZoom();
    var con = "<h4>" + this.datas_.name + "</h4>"
    div.innerHTML = con;

    this.div_ = div;
    var panes = this.getPanes();  
    //panes.overlayMouseTarget.appendChild( this.div_ );
    panes.overlayImage.appendChild( this.div_ );
};

// 添加到地圖
MarkerShow.prototype.draw = function ()
{
    var overlayProjection = this.getProjection();

    // Retrieve the south-west and north-east coordinates of this overlay
    // in LatLngs and convert them to pixel coordinates.
    // We'll use these coordinates to resize the div.
    var sw = overlayProjection.fromLatLngToDivPixel( this.bounds_.getSouthWest() );
    var ne = overlayProjection.fromLatLngToDivPixel( this.bounds_.getNorthEast() );


    // Resize the image's div to fit the indicated dimensions.
    var div = this.div_;
    var size = new google.maps.Size( 100, 50 );
    div.style.width = size.width + 'px';
    div.style.height = size.height + 'px';
    if ( this.zoom <= 10 )
    {
        div.style.width = size.width * 1.1;
        div.style.height = size.height * 1.1;
    }
    else
    {
        div.style.width = size.width * 0.9;
        div.style.height = size.height * 0.9;
    }

    //div.style.left = ( sw.x - size.width / 2 ) + 'px';
    //div.style.top = ( ne.y + -size.height / 2 ) + 'px';
    div.style.left = ( sw.x +18) + 'px';
    div.style.top = ( ne.y -35) + 'px';
};

// 刪除標記
MarkerShow.prototype.onRemove = function ()
{
    this.div_.parentNode.removeChild( this.div_ );
    this.div_ = null;
};
