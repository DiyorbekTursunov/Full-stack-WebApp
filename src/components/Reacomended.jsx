// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/sass/home.sass/Recomended.scss";

// import required modules
import { Pagination } from "swiper/modules";

const Reacomended = ({ products }) => {
  return (
    <>
      <h1 className="hero-title">Recommended</h1>
      <p className="hero-desc">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="recomended container"
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <div className="recomended-card">
                <img src={product.imageUrl} alt={product.name} />
                <div className="info">
                  <h3>{product.name}</h3>
                  <p>{product.address}</p>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M17.2372 8.62503V4.39389C17.2372 3.46107 16.4782 2.70215 15.5454 2.70215H3.45459C2.52177 2.70215 1.76284 3.46107 1.76284 4.39389V8.62503C0.74768 8.90606 0 9.8375 0 10.9408V14.1557C0 14.4672 0.252566 14.7198 0.564062 14.7198H1.76284V15.7345C1.76284 16.046 2.01541 16.2986 2.32691 16.2986C2.6384 16.2986 2.89097 16.046 2.89097 15.7345V14.7198H16.109V15.7345C16.109 16.046 16.3616 16.2986 16.6731 16.2986C16.9846 16.2986 17.2372 16.046 17.2372 15.7345V14.7198H18.4359C18.7474 14.7198 19 14.4672 19 14.1557V10.9408C19 9.8375 18.2523 8.90606 17.2372 8.62503ZM2.89097 4.39389C2.89097 4.08314 3.14383 3.83027 3.45459 3.83027H15.5455C15.8562 3.83027 16.1091 4.08314 16.1091 4.39389V8.53775H14.7874V7.4055C14.7874 6.42095 13.9864 5.61998 13.0019 5.61998H10.7215C10.2493 5.61998 9.81966 5.80453 9.50004 6.10493C9.18041 5.80457 8.75076 5.61998 8.27858 5.61998H5.99817C5.01362 5.61998 4.21266 6.42099 4.21266 7.4055V8.53775H2.89097V4.39389ZM13.6593 7.4055V8.53775H10.0641V7.4055C10.0641 7.04298 10.359 6.74811 10.7215 6.74811H13.0019C13.3644 6.74811 13.6593 7.04302 13.6593 7.4055ZM8.9359 7.4055V8.53775H5.34067V7.4055C5.34067 7.04298 5.63562 6.74811 5.99806 6.74811H8.27847C8.64099 6.74811 8.9359 7.04302 8.9359 7.4055ZM17.8719 13.5917H1.12812V10.9408C1.12812 10.2378 1.70005 9.66587 2.40309 9.66587H16.5969C17.2999 9.66587 17.8719 10.2378 17.8719 10.9408V13.5917Z"
                          fill="#696969"
                        />
                      </svg>
                      {product.beds} Beds
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_769_164)">
                          <path
                            d="M18.7622 11.0558C18.7622 10.7426 18.5082 10.4886 18.195 10.4886H17.0597V2.75501C17.0597 1.23589 15.8238 0 14.3047 0C12.7856 0 11.5497 1.23589 11.5497 2.75501V3.78902C11.5497 4.10226 11.8037 4.35624 12.1169 4.35624C12.4301 4.35624 12.6841 4.10226 12.6841 3.78902V2.75501C12.6841 1.86141 13.4111 1.13444 14.3047 1.13444C15.1983 1.13444 15.9253 1.86141 15.9253 2.75501V10.4886H0.805499C0.492258 10.4886 0.238281 10.7426 0.238281 11.0558C0.238281 13.6158 1.8574 15.8044 4.12527 16.6522C3.68901 17.1108 3.41919 17.7397 3.41919 18.4328C3.41919 18.746 3.67317 19 3.98641 19C4.29965 19 4.55363 18.746 4.55363 18.4328C4.55363 17.6583 5.1446 17.0282 5.87105 17.0282C5.89773 17.0282 13.1028 17.0282 13.1294 17.0282C13.8559 17.0282 14.4469 17.6583 14.4469 18.4328C14.4469 18.746 14.7009 19 15.0141 19C15.3274 19 15.5813 18.746 15.5813 18.4328C15.5813 17.7397 15.3115 17.1108 14.8753 16.6522C17.1431 15.8044 18.7622 13.6158 18.7622 11.0558ZM12.7898 15.8938H6.21068C3.73481 15.8938 1.68741 14.0245 1.40578 11.6231H17.5947C17.3131 14.0245 15.2656 15.8938 12.7898 15.8938Z"
                            fill="#696969"
                          />
                          <path
                            d="M12.117 5.34082C11.8038 5.34082 11.5498 5.5948 11.5498 5.90804V6.39963C11.5498 6.71287 11.8038 6.96685 12.117 6.96685C12.4303 6.96685 12.6842 6.71287 12.6842 6.39963V5.90804C12.6842 5.59476 12.4303 5.34082 12.117 5.34082Z"
                            fill="#696969"
                          />
                          <path
                            d="M12.117 8.06348C11.8038 8.06348 11.5498 8.31745 11.5498 8.63069V9.12228C11.5498 9.43552 11.8038 9.6895 12.117 9.6895C12.4303 9.6895 12.6842 9.43552 12.6842 9.12228V8.63069C12.6842 8.31742 12.4303 8.06348 12.117 8.06348Z"
                            fill="#696969"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_769_164">
                            <rect width="19" height="19" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {product.baths} Baths
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M18.2733 7.61184L17.8592 7.17338L16.4058 3.25564C16.1581 2.59389 15.5248 2.15543 14.8184 2.15137H4.43739C3.73098 2.15137 3.09765 2.59389 2.85 3.25564L1.41688 7.12466L0.820086 7.67679C0.300427 8.11932 0 8.76889 0 9.45094V15.1591C0.00405983 16.0928 0.763248 16.8479 1.69701 16.8479H2.7688C3.70256 16.8479 4.46175 16.0928 4.46581 15.1591V14.3309H14.5342V15.1591C14.5382 16.0928 15.2974 16.8479 16.2312 16.8479H17.303C18.2368 16.8479 18.9959 16.0928 19 15.1591V9.30073C18.9959 8.66333 18.7361 8.05436 18.2733 7.61184ZM3.61325 3.53171C3.74316 3.18662 4.07201 2.96333 4.43739 2.96333H14.8224C15.1878 2.96333 15.5167 3.19068 15.6466 3.53171L16.9132 6.94197H15.9673C15.744 5.41953 14.3271 4.36803 12.8047 4.59538C11.5908 4.77402 10.6368 5.72808 10.4581 6.94197H2.34658L3.61325 3.53171ZM15.1391 6.94197H11.2782C11.5015 5.87423 12.5489 5.19218 13.6167 5.41547C14.3799 5.57786 14.9767 6.17466 15.1391 6.94197ZM3.65385 15.1591C3.64979 15.6462 3.25598 16.036 2.7688 16.036H1.69701C1.20983 16.036 0.816026 15.6462 0.811966 15.1591V14.0954C1.05556 14.2537 1.37628 14.3309 1.69701 14.3309H3.65385V15.1591ZM18.188 15.1591C18.184 15.6462 17.7902 16.036 17.303 16.036H16.2312C15.744 16.036 15.3502 15.6422 15.3462 15.1591V14.3309H17.303C17.6237 14.3309 17.9444 14.2537 18.188 14.0954V15.1591ZM17.303 13.5189H1.69701C1.21389 13.5229 0.816026 13.1373 0.811966 12.6501V9.45094C0.811966 9.00436 1.0109 8.57808 1.35192 8.28983C1.35598 8.28577 1.3641 8.27765 1.36816 8.27359L1.9203 7.75393H17.2949L17.6846 8.17209C17.6887 8.18021 17.7009 8.18427 17.7049 8.19239C18.0094 8.48064 18.184 8.88256 18.184 9.30073V12.6501H18.188C18.184 13.1332 17.7861 13.5229 17.303 13.5189Z"
                          fill="#696969"
                        />
                        <path
                          d="M5.35906 9.37793H2.31419C2.0909 9.37793 1.9082 9.56062 1.9082 9.78391V11.895C1.9082 12.1183 2.0909 12.301 2.31419 12.301H5.35906C5.58235 12.301 5.76504 12.1183 5.76504 11.895V9.78391C5.76504 9.56062 5.58235 9.37793 5.35906 9.37793ZM4.95308 11.489H2.72017V10.1899H4.95308V11.489Z"
                          fill="#696969"
                        />
                        <path
                          d="M16.6862 9.37793H13.6413C13.418 9.37793 13.2354 9.56062 13.2354 9.78391V11.895C13.2354 12.1183 13.418 12.301 13.6413 12.301H16.6862C16.9095 12.301 17.0922 12.1183 17.0922 11.895V9.78391C17.0922 9.56062 16.9095 9.37793 16.6862 9.37793ZM16.2802 11.489H14.0473V10.1899H16.2802V11.489Z"
                          fill="#696969"
                        />
                        <path
                          d="M11.4606 11.083H7.5388C7.3155 11.083 7.13281 11.2657 7.13281 11.489C7.13281 11.7123 7.3155 11.895 7.5388 11.895H11.4606C11.6839 11.895 11.8666 11.7123 11.8666 11.489C11.8666 11.2657 11.6839 11.083 11.4606 11.083Z"
                          fill="#696969"
                        />
                        <path
                          d="M11.4606 9.8252H7.5388C7.3155 9.8252 7.13281 10.0079 7.13281 10.2312C7.13281 10.4545 7.3155 10.6372 7.5388 10.6372H11.4606C11.6839 10.6372 11.8666 10.4545 11.8666 10.2312C11.8666 10.0079 11.6839 9.8252 11.4606 9.8252Z"
                          fill="#696969"
                        />
                      </svg>
                      {product.garage} Garage
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_769_194)">
                          <path
                            d="M16.149 0.146667L0.147593 16.1481C-0.165849 16.4616 0.0565081 17 0.500424 17H16.5019C16.7775 17 17.0009 16.7766 17.0009 16.501V0.499531C17.0009 0.0562469 16.463 -0.167208 16.149 0.146667ZM16.0029 16.002H1.70516L4.243 13.4641L4.93808 14.1592C5.03552 14.2567 5.16323 14.3054 5.29091 14.3054C5.7315 14.3054 5.95902 13.7688 5.64374 13.4535L4.94866 12.7584L6.37206 11.335L7.06714 12.0301C7.16458 12.1276 7.29229 12.1763 7.41997 12.1763C7.86056 12.1763 8.08807 11.6397 7.7728 11.3244L7.07775 10.6294L8.50115 9.20596L9.19623 9.90104C9.29367 9.99848 9.42138 10.0472 9.54906 10.0472C9.98965 10.0472 10.2172 9.51058 9.90189 9.19531L9.20684 8.50026L10.6302 7.07686L11.3253 7.77195C11.4228 7.86939 11.5505 7.91809 11.6782 7.91809C12.1187 7.91809 12.3463 7.38149 12.031 7.06622L11.3359 6.37117L12.7593 4.94777L13.4544 5.64285C13.5519 5.74029 13.6796 5.789 13.8072 5.789C14.2478 5.789 14.4753 5.2524 14.1601 4.93713L13.465 4.24208L16.0029 1.70423V16.002H16.0029Z"
                            fill="#696969"
                          />
                          <path
                            d="M12.9219 8.39667L8.39759 12.921C8.08415 13.2344 8.30651 13.7729 8.75042 13.7729H13.2747C13.5503 13.7729 13.7737 13.5494 13.7737 13.2738V8.74953C13.7738 8.30625 13.2358 8.08279 12.9219 8.39667ZM12.7758 12.7748H9.95516L12.7758 9.95423V12.7748Z"
                            fill="#696969"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_769_194">
                            <rect width="17" height="17" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {product.sqFt} sq ft
                    </li>
                  </ul>
                  <span className="price">{product.price}</span>
                  <span className="type">{product.type}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Reacomended;
