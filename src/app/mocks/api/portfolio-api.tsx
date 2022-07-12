import mockApi from '../mock-api.json';
import mock from '../mock';
let dataMenusDB = mockApi.components.examples.menus.value
let dataLinksDB = mockApi.components.examples.links.value
let dataProjectsDB = mockApi.components.examples.projects.value
let dataWorksDB = mockApi.components.examples.works.value

let dataOwnerDB = mockApi.components.examples.owner.value

mock.onGet('/api/menus').reply((config: any) => {
  return [200, dataMenusDB];
});

mock.onGet('/api/links').reply((config: any) => {
  return [200, dataLinksDB];
});

mock.onGet('/api/projects').reply((config: any) => {
  return [200, dataProjectsDB];
});

mock.onGet('/api/works').reply((config: any) => {
  return [200, dataWorksDB];
});

mock.onGet('/api/owner').reply((config: any) => {
  return [200, dataOwnerDB];
});