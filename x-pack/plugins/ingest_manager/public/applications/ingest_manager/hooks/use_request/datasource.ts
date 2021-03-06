/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { sendRequest, useRequest } from './use_request';
import { datasourceRouteService } from '../../services';
import { CreateDatasourceRequest, CreateDatasourceResponse } from '../../types';
import {
  DeleteDatasourcesRequest,
  DeleteDatasourcesResponse,
  GetDatasourcesRequest,
  GetDatasourcesResponse,
} from '../../../../../common/types/rest_spec';

export const sendCreateDatasource = (body: CreateDatasourceRequest['body']) => {
  return sendRequest<CreateDatasourceResponse>({
    path: datasourceRouteService.getCreatePath(),
    method: 'post',
    body: JSON.stringify(body),
  });
};

export const sendDeleteDatasource = (body: DeleteDatasourcesRequest['body']) => {
  return sendRequest<DeleteDatasourcesResponse>({
    path: datasourceRouteService.getDeletePath(),
    method: 'post',
    body: JSON.stringify(body),
  });
};

export function useGetDatasources(query: GetDatasourcesRequest['query']) {
  return useRequest<GetDatasourcesResponse>({
    method: 'get',
    path: datasourceRouteService.getListPath(),
    query,
  });
}
