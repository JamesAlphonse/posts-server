import { Request, Response } from 'express';
import { HTTP_CODE_OK, HTTP_CODE_INTERNAL_SERVER_ERROR } from '@/constants/httpStatusCodes';
import { HTTP_MESSAGE_OK, HTTP_MESSAGE_INTERNAL_SERVER_ERROR } from '@/constants/httpStatusMessages';
import axios from 'axios';
import sendResponse from '@/utils/response.util';
import createError from '@/utils/error.util';

const http = axios.create({
  baseURL: process.env.JSON_PLACEHOLDER_API_BASE_URL
});

/**
 * 
 * @param req HTTP request object
 * @param res HTTP response object
 * @returns JSON Placeholder API data for all posts
 */
export async function GetAll(req: Request, res: Response) {
  /*
  Under normal circumstances using either an API or database service that could
  potentially return many more results I would implement some kind of pagination
  functionality here to use with the frontend application and call this method
  "GetMany". For this project considering we are using a fake API that always
  provides just 100 results I will leave that out especially since I am assuming
  the real focus of this project is the frontend application and it's handling of
  this data within the redux store.
  */
  try {
    const response = await http.get(process.env.JSON_PLACEHOLDER_API_POSTS!, {});
    return sendResponse(res, HTTP_CODE_OK, HTTP_MESSAGE_OK, response.data);
  }
  catch(err) {
    createError(err);
    return sendResponse(res, HTTP_CODE_INTERNAL_SERVER_ERROR, HTTP_MESSAGE_INTERNAL_SERVER_ERROR);
  }
}