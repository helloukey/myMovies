import { useEffect, useMemo, useState } from "react";

const useUniqueData = (data) => {
  const [uniqueItems, setUniqueItems] = useState([]);

  useEffect(() => {
    if (data) {
        const uniqueIds = [];
        setUniqueItems(data.filter(element => {
          const isDuplicate = uniqueIds.includes(element.id);
      
          if (!isDuplicate) {
            uniqueIds.push(element.id);
      
            return true;
          }
      
          return false;
        }))
      }
  }, [data])


  return { uniqueItems }
}
export default useUniqueData