import React, { useState, useEffect } from "react";
import SelectTag from "../../shared/SelectTag";

function CampaignForm({ selectedCampaign, save, cancel }) {
  const [campaign, setCampaign] = useState(selectedCampaign);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setCampaign(selectedCampaign);
    setTitle(selectedCampaign.title);
  }, [selectedCampaign]);

  return (
    <div className="max-w-sm py-4 px-6 border bg-white w-full rounded shadow-sm">
      <p className="mt-1 font-bold text-gray-600 text-xl">
        {title || "Create a New Item"}
      </p>
      <form onSubmit={() => save(title, campaign)}>
        <div className="mt-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
            type="text"
            required
            disabled={title}
            placeholder="Title"
            aria-label="Title"
            value={campaign.title || ""}
            onChange={
              title
                ? () => {}
                : (event) =>
                    setCampaign({ ...campaign, title: event.target.value })
            }
          />
        </div>

        <div className="flex mt-4">
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="target"
            >
              Money Target
            </label>
            <input
              className="w-32 mt-2 py-2 px-4 bg-gray-100 text-gray-700 text-center border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
              type="number"
              min={500}
              max={9999999}
              required
              disabled={title}
              placeholder="0 EGP"
              aria-label="Money Target"
              value={campaign.money_target || ""}
              onChange={
                title
                  ? () => {}
                  : (event) =>
                      setCampaign({
                        ...campaign,
                        money_target: +event.target.value,
                      })
              }
            />
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Expires At
            </label>
            <input
              className="w-48 mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
              type="date"
              required
              placeholder="Select Expiration Date"
              aria-label="date"
              value={
                campaign.expires_at ? campaign.expires_at.slice(0, 10) : ""
              }
              onChange={(event) =>
                setCampaign({ ...campaign, expires_at: event.target.value })
              }
            />
          </div>
        </div>

        <div className="mt-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="details"
          >
            Details
          </label>
          <textarea
            rows="3"
            className="resize-none w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
            required
            placeholder="Details..."
            aria-label="Details"
            value={campaign.details || ""}
            onChange={(event) =>
              setCampaign({ ...campaign, details: event.target.value })
            }
          ></textarea>
        </div>
        <div className="mt-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tags"
          >
            Tags
          </label>
          <SelectTag />
        </div>

        <div className="flex justify-start items-center mt-6">
          <button
            className="mr-6 py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
            type="button"
            disabled={selectedCampaign === campaign}
            // disabled={form.current && !form.current.valid}
            onClick={() => save(title, campaign)}
          >
            Save
          </button>
          <button
            className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-400 focus:outline-none"
            type="reset"
            onClick={() => cancel()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CampaignForm;
