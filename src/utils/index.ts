import { LocationQueryRaw, RouteParamsRaw } from 'vue-router';

import router from '../router';

interface IJump {
  path: string,
  query?: LocationQueryRaw,
  params?: RouteParamsRaw,
}

export const jump = ({
  path,
  query = {},
  params = {},
}: IJump) => {
  if (!path) return;
  if (router.currentRoute
    && router.currentRoute.value
    && router.currentRoute.value.path.includes(path)
  ) return;
  router.push({
    path,
    query,
    params,
  });
  // if (path === PAGE_ENUM.SNOW) {
  //   audio.load();
  //   audio.play();
  // } else {
  //     audio.pause();
  // }
  // history.push(path);
};

export default {
  jump,
};
