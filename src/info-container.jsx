import React, { useState, useEffect } from 'react';
import InfoDisplay from './info-display';

function InfoContainer() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=JhxeNK08mwzf3ULT1fFsZeaa7fO6CeCLvNQslctN');
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <InfoDisplay data={data} fetchData={fetchData} />
    </div>
  );
}

export default InfoContainer;