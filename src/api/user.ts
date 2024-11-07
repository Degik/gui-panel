import api from './axiosConfig';
import { User, LoginRequest, LoginResponse } from '../interfaces';

const API_URL = 'https://api.site.com';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>(`${API_URL}/users`);
  return response.data;
};

export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(`${API_URL}/login`, credentials);
  return response.data;
};