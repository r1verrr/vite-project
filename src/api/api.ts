import { Request } from './request';
export function zzz (parameter: any)  {
  return Request.axiosInstance({
    url: '/users/zzz',
    method: 'get',
    data: parameter
  })
}