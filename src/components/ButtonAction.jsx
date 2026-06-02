"use client";

import { SummaryContext } from "@/context/SummaryContext";
import { useContext } from "react";

const ButtonAction = ({ friendName }) => {
    const { setSummary } = useContext(SummaryContext);
    const handleOnClick = (action) => {
       const actionDetails = {
        friendName,
        action,
        date: new Date().toISOString()
       }
       setSummary(prev => [...prev, actionDetails]);
    //    console.log("Action Details:", actionDetails);

    }
    return (
        <div className="col-start-2 row-start-3 bg-white rounded-2xl p-6 shadow-sm">
          <p className="font-semibold text-gray-900 text-base mb-4">Quick Check-In</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Call", icon: "📞" },
              { label: "Text", icon: "💬" },
              { label: "Video", icon: "🎥" },
            ].map((action, i) => (
              <button
              onClick={()=>handleOnClick(action.label)}
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl py-5 flex flex-col items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span className="text-2xl">{action.icon}</span>
                {action.label}
              </button>
            ))}
          </div>
        </div>
    );
};

export default ButtonAction;