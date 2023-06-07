import {AuthProvider} from "react-admin";
import axios from "axios";
import {token, TOKEN, user} from "./func.ts";

export const authProvider: AuthProvider = {
  login: ({username, password}) => {
    return axios
        .post(import.meta.env.VITE_API, {
          method: "login",
          username,
          password,
        })
        .then(({status, data}) => {
          if (status < 200 || status >= 300) {
            throw new Error("Введены неверные данные");
          }
          localStorage.setItem(TOKEN, data.token);
          return Promise.resolve();
        })
        .catch(() => {
          throw new Error("Ошибка сети или введены неверные данные");
        });
  },

  logout: () => {
    localStorage.removeItem(TOKEN);
    return Promise.resolve();
  },

  checkError: ({status}) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem(TOKEN);
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => token()
      ? Promise.resolve()
      : Promise.reject(),

  getPermissions: () => token()
      ? Promise.resolve(user().role)
      : Promise.reject(),

  getIdentity: () =>
      Promise.resolve({
        id: user().id,
        fullName: user().login,
      }),
};
