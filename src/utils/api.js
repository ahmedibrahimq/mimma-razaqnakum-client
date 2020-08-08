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

export const addCampaign = (group, campaign) => {
  const data = {
    title: campaign.title,
    group_name: group,
    details: campaign.details,
    expires_at: campaign.expires_at,
    money_target: campaign.money_target,
    pics: campaign.pics || [],
    tags: campaign.tags || ["other"],
  };
  return axios.post(`http://localhost:3000/api/campain`, data);
};

export const updateCampaign = (title, group, campaign) => {
  const data = {
    title: title,
    group_name: group,
    details: campaign.details,
    expires_at: campaign.expires_at,
    status: campaign.status,
    pics: campaign.pics || [],
    // tags: campaign.tags || ["other"],
  };
  return axios.put(`http://localhost:3000/api/campain/${title}`, data);
};

export const deleteCampaign = (title, group) => {
  const data = {
    title: title,
    groupName: group,
  };
  return axios.delete(`http://localhost:3000/api/campain/${title}`, { data });
};
