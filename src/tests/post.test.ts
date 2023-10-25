import supertest from 'supertest';
import { app } from '@/index';
import { HTTP_CODE_OK } from '@/constants/httpStatusCodes';
import { HTTP_MESSAGE_OK } from '@/constants/httpStatusMessages';

describe('Posts', () => {
  describe('Request', () => {
    describe('Get', () => {
      describe('Given all posts can be retrieved succesfully', () => {
        it('should return status code 200 and a message saying Request Succesful', async () => {
          const response = await supertest(app)
            .get('/api/posts')
            .expect(HTTP_CODE_OK);
          expect(response.body).toHaveProperty('message', HTTP_MESSAGE_OK);
        });
      });
    });
  });
});