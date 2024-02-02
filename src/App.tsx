import { useState } from "react";
import { Step } from "./shared/types";
import useMediaQuery from "./hooks/useMediaQuery";

const steps: Step[] = [
  { step: "Step 1", title: "Your info" },
  { step: "Step 2", title: "Select Plan" },
  { step: "Step 3", title: "Add-ons" },
  { step: "Step 4", title: "Summary" },
];

function App() {
  const [selectedStep, setSelectedStep] = useState<Step>(steps[0]);
  const isLargeScreen = useMediaQuery("(min-width: 770px)");

  return (
    <main className="h-[100vh] bg-pastel-blue font-Ubuntu">
      {/* MAIN CONTAINER */}
      <div>
        {/* STEP SELECTOR */}
        <div>{/* SELECTOR HERE */}</div>
        {/* TEXT AREA */}
        <div>
          <div>
            {/* TITLE AND SUBTITLE HERE */}
            {/* INPUT FIELDS */}
          </div>
          <div>
            {/* GO BACK BUTTON */}
            {/* NEXT STEP BUTTON */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
