import { useEffect, useState } from 'react';
import PropertyCard from '../../components/property/PropertyCard';
import { fetchProperties } from '../../utils/request';
function index() {
  const [propertJson, setpropertJson] = useState([])
  useEffect(() => {
    fetchProperties().then(data => {
      setpropertJson(data);
    });
  }, [])
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {/* {propertJson && propertJson.length === 0 ? (
          <p>No properties found</p>
        )
          : ( */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {propertJson && propertJson.map(item => (
                <PropertyCard
                  key={item._id}
                  property={item}
                />
              ))}
            </div>
          {/* ) */}
        {/* } */}

      </div>
    </section>

  )
}

export default index