interface ICoordinates {
  latitudeStart: number;
  longetudeStart: number;
  latitudeEnd: number;
  longetudeEnd: number;
}

const degrees2rad = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

const getDistanceInKmWithCoordinates = ({
  latitudeStart,
  longetudeStart,
  latitudeEnd,
  longetudeEnd,
}: ICoordinates): number => {
  const radiusOfEarth = 6371;

  const dLat = degrees2rad(latitudeEnd - latitudeStart);
  const dLon = degrees2rad(longetudeEnd - longetudeStart);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degrees2rad(latitudeStart)) *
      Math.cos(degrees2rad(latitudeEnd)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = radiusOfEarth * c;

  return distance;
};

export default getDistanceInKmWithCoordinates;
