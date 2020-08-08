import React from "react";

function CampaignEditItem({ campaign, selected, deleted }) {
  return (
    <tr onClick={() => selected(campaign)} className="cursor-pointer">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <div
              className="pt-2 h-10 w-10 rounded-full border m-auto text-center text-sm bg-green-700"
              style={{
                opacity:
                  campaign.money_collected / campaign.money_target || 0.1,
              }}
            >
              {(campaign.money_collected / campaign.money_target) * 100}%
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm leading-5 capitalize font-medium text-gray-900">
              {campaign.title}
            </div>
            <div className="flex text-sm leading-5 text-gray-500">
              <p className="max-w-xs truncate" style={{ maxWidth: 12 + "rem" }}>
                {campaign.details}
              </p>
              &nbsp;
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                more
              </a>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {campaign.expires_at.slice(0, 10)}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <p className="px-2 inline-flex text-xs leading-5 capitalize font-semibold rounded-full bg-green-100 text-green-800">
          {campaign.status}
        </p>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
        <button
          onClick={(event) => {
            deleted(campaign, "Test");
            event.stopPropagation();
          }}
          className="text-red-600 hover:text-red-900"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CampaignEditItem;
