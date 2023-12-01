import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginOptions } from "models/User";
import toast from "react-hot-toast";
import { getRequest, postRequest } from "utils/methods";

export const login = createAsyncThunk(
  'user/login',
  async (payload: LoginOptions, thunkAPI) => {
    try {
      const response: any = await postRequest('/auth/login', payload);
      if (!!response)  {
        toast.success('Пользователь успешно авторизован');
      } else {
        toast.error(`Ошибка при авторизации`);
      }
      return response;
    } catch (e: any) {
      toast.error(`Ошибка при авторизации: ${e.message}`);
      return thunkAPI.rejectWithValue(`Ошибка при авторизации: ${e.message}`);
    }
  }
)

export const loadTestData = createAsyncThunk(
  'user/loadTestData',
  async (_, thunkAPI) => {
    try {
      const response: any = await getRequest('/tasks/?limit=10&offset=1');
      return response;
    } catch (e: any) {
      toast.error(`Ошибка при загрузке данных для таблицы входящая очередь ${e.message}`);
      return thunkAPI.rejectWithValue(`Ошибка при загрузке данных для таблицы входящая очередь: ${e.message}`);
    }
  }
)
