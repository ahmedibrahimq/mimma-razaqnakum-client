import React, { useState, useEffect } from "react";
import CampaignEditList from "../campain/campain-edit/CampaignEditList";
import CampaignForm from "../campain/campain-edit/CampaignForm";
import GroupCard from "../group/GroupCard";
import { addCampaign, updateCampaign, deleteCampaign } from "../../utils/api";

function Admin({ title = "" }) {
  const [selectedItem, setSelectedItem] = useState({});
  const [refreshItems, setRefreshItems] = useState(0);

  useEffect(() => {
    resetSelectedItem();
  }, []);

  function resetSelectedItem() {
    const emptyCampaign = {
      title: "",
      money_target: "",
      details: "",
      created_at: null,
      expires_at: "",
      // tags: [],
    };
    setSelectedItem(emptyCampaign);
  }

  function refreshCampaigns() {
    setRefreshItems(!refreshItems);
  }

  function selectItem(campaign) {
    setSelectedItem(campaign);
  }

  function saveItem(title, campaign) {
    const isNew = campaign.created_at === null;
    if (isNew) {
      addCampaign("Test", campaign).then(refreshCampaigns());
      // .catch((err) => console.error(err.message));
    } else {
      updateCampaign(title, "Test", campaign).then(refreshCampaigns());
    }
    resetSelectedItem();
  }

  function deleteItem(campaign, group) {
    deleteCampaign(campaign.title, group).then(refreshCampaigns());
  }

  return (
    <div className="flex mt-24 mb-16 justify-between items-start">
      <GroupCard />
      <CampaignEditList
        refreshItems={refreshItems}
        selected={selectItem}
        deleted={deleteItem}
      />
      <CampaignForm
        {...{
          selectedCampaign: selectedItem,
          save: saveItem,
          cancel: resetSelectedItem,
        }}
      />
    </div>
  );
}

export default Admin;
