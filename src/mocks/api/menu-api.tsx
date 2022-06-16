import mockApi from '../mock-api.json';
import mock from '../mock';
let dataMenusDB = mockApi.components.examples.menus.value
let dataLinksDB = mockApi.components.examples.links.value

mock.onGet('/api/menus').reply((config: any) => {
  return [200, dataMenusDB];
});

mock.onGet('/api/links').reply((config: any) => {
  return [200, dataLinksDB];
});