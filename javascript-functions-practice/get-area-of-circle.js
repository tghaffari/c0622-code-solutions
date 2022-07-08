/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
  var radiusSquared = radius * radius;
  var area = radiusSquared * Math.PI;
  return area;
}
