import { StatusCodes } from 'http-status-codes';

export class APIResponse {
  data;
  status;
  message;
  constructor(status, message, data) {
    (this.status = status), (this.message = message), (this.data = data);
  }
}
