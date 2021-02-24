import React, { useEffect, useState } from "react";
import ServiceProfile from "./ServiceProfile";
import { BeautyProviders } from "../../lib/mockProviders";
import Calendar from "./Calendar";
import serviceProfile from "./serviceProfile.module.css";
import AdminCalendar from "./AdminCalendar";

function ServicePage() {
  const owner = true;
  const [isLoaded, setIsLoaded] = useState(false);
  const [provider, setProvider] = useState(BeautyProviders[0]);
  const { bannerUrl } = provider;

  useEffect(() => {
    // for when we connect to backend
    // GETFromProviders(`getById`, JSON.stringify(id) )
    // let available = await  GETProviders available times
    setProvider(BeautyProviders[0]);
  }, []);

  //   if (owner) {
  //     return <div>owner</div>;
  //   }
  return (
    <div>
      <div
        className={serviceProfile.banner}
        style={{
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: "contain",
        }}
      />
      <div className={serviceProfile.serviceContainer}>
        <div>
          <ServiceProfile provider={provider} />
        </div>
        <div>{!owner && <Calendar provider={provider} />}</div>
        <div>{owner && <AdminCalendar />}</div>
      </div>
    </div>
  );
}

export default ServicePage;
