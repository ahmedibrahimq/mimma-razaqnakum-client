import React, { useEffect, useState } from "react";
import CampaignEditItem from "./CampaignEditItem";
import { getGroupCampaigns } from "../../../utils/api";

function CampaignEditList({ refreshItems, selected, deleted }) {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    getGroupCampaigns("Test", 1).then(({ data: campaignsList }) => {
      setCampaigns(campaignsList);
    });
  }, [refreshItems]);

  return (
    <div className="flex flex-col mx-8">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-screen-sms align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Expire Date
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {campaigns.map((c) => (
                <CampaignEditItem
                  key={c.title}
                  campaign={c}
                  selected={selected}
                  deleted={deleted}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CampaignEditList;
