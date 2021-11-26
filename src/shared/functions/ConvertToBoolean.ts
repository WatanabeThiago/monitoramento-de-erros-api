export default function ConvertToBoolean(data: any) {
  if (data === 'true') {
    return true;
  }
  if (data === undefined) {
    return undefined;
  }
  return false;
}
