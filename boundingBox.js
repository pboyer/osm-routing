function boundingBoxNew() {
  return [
    Number.MAX_VALUE,
    Number.MAX_VALUE,
    -Number.MAX_VALUE,
    -Number.MAX_VALUE,
  ];
}

function boundingBoxWidthHeight(bb) {
  return [bb[2] - bb[0], bb[3] - bb[1]];
}

function boundingBoxAddPoint(bb, point) {
  if (point[0] < bb[0]) {
    bb[0] = point[0];
  }

  if (point[1] < bb[1]) {
    bb[1] = point[1];
  }

  if (point[0] > bb[2]) {
    bb[2] = point[0];
  }

  if (point[1] > bb[3]) {
    bb[3] = point[1];
  }
}
