import mockApi from '../mock-api.json';
import mock from '../mock';
let dataMenusDB = mockApi.components.examples.menus.value

mock.onGet('/api/menus').reply((config: any) => {
  return [200, dataMenusDB];
});
