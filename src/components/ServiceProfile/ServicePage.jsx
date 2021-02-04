import React, { useEffect, useState } from 'react'
import ServiceProfile from "./ServiceProfile"
import { BeautyProviders } from "../../lib/mockProviders";
import Calendar from "./Calendar"
import serviceProfile from "./serviceProfile.module.css";

function ServicePage() {
    const owner = false;

      const [provider, setProvider] = useState({});

      useEffect(() => {
        // for when we connect to backend
        // GETFromProviders(`getById`, JSON.stringify(id) )
        // let available = await  GETProviders available times
        setProvider(BeautyProviders[0]);
      }, []);

    return (
      <div className={serviceProfile.serviceContainer}>
        <div>
          <ServiceProfile provider={provider} />
        </div>
        <div>
                <Calendar provider={provider} /> 
        </div>
      </div>
    );
}

export default ServicePage
