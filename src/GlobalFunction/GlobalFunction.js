export function setCookie(data) {
   const { key, details } = data;
   document.cookie = `${key}=${JSON.stringify(details)}`;
}

export function getCookie(key) {
   const semicolonSplited = document.cookie.split(";");
   const equalSplited = semicolonSplited.map((item) => {
      return item.split("=");
   });
   const dataObject = equalSplited.reduce((accumulator, [key, value]) =>
      ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}
   );
   return dataObject[key]
}

export function deleteCookie(deletedName) {
   document.cookie = `${deletedName}=`;
   alert(`${deletedName} cookie data deleted`);
}

export function removeItems(userData, list) {
   const filteredData = list.filter((item) => item.id !== userData.id);
   return filteredData
}

export function fallbackRender({ error, resetErrorBoundary }) {
   console.log("mnnmnmn", error);
   return (
      <div role="alert">
         <p>Something went wrong:</p>
         <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
   )
}

export function mrpPrice(disPercentage, price){
   if(disPercentage){
      let discountPrice = (disPercentage*price)/100;
      discountPrice = discountPrice + price

      return discountPrice.toFixed(2);
   }
}



