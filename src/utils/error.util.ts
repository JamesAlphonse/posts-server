/**
 * 
 * @param error any kind of generic error thrown by this API. given more time and more specific circumstances the typing and handling here could be better. for example this function could be edited to include an ability to output to a log file, send an email, etc.
 */
export default function createError(error: unknown) {
  console.error(error);
}