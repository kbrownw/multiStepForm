import { useState } from "react";

export const useCountryCodeLookup = () => {
  const [countryCode, setCountryCode] = useState<string>("US");
  const cachedCountryCode = sessionStorage.getItem("countryCode");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const countryCodeLookup = async () => {
    const url = "http://ip-api.com/json";
    let response;
    let data;
    if (cachedCountryCode) {
      // Use countryCode from sessionStorage if it exists
      setCountryCode(JSON.parse(cachedCountryCode));
    } else {
      // Get countryCode from API if it doesn't exist in sessionStorage
      setIsLoading(true);
      try {
        response = await fetch(url);
      } catch (error) {
        console.log("Fetch error: ", error);
      }
      try {
        data = await response?.json();
      } catch (error) {
        console.log("Data error: ", error);
      } finally {
        setIsLoading(false);
        setCountryCode(data["countryCode"]);
        sessionStorage.setItem(
          "countryCode",
          JSON.stringify(data["countryCode"])
        );
      }
    }
  };
  return { countryCode, isLoading, countryCodeLookup };
};
