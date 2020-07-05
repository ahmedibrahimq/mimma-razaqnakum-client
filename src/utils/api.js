import axios from "axios";

export const getGroups = () => {
  return axios.get("http://localhost:3000/api/group");
};

export const getGroupMembers = (group) => {
  return axios.get(`http://localhost:3000/api/member?groupName=${group}`);
};

export const getGroupTags = (group) => {
  return axios.get(`http://localhost:3000/api/tag?group=${group}`);
};

export const getGroupCampaigns = (group, page, limit = 10) => {
  return axios.get(
    `http://localhost:3000/api/campain?gn=${group}&pg=${page}&l=${limit}`
  );
};

export const getCampaign = (title, group) => {
  return axios.get(`http://localhost:3000/api/campain/${title}?gn=${group}`);
};
