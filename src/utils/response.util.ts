import { Response } from 'express';

/**
 * 
 * @param res response object to finish a request with
 * @param statusCode standardized response code constant
 * @param message standardized response message constant or custom message
 * @param data optional JSON data
 */
export default function sendResponse(res: Response, statusCode: number, message: string, data?: string) {
  res.status(statusCode).json({ message: message, data: data });
}