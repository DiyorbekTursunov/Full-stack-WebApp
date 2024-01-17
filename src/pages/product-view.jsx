// Sass
import "../styles/sass/product_view.sass/product_view.scss";

// react router dom
import { Link } from "react-router-dom";

// Images
import product_view_img_1 from "../assets/product_view_img_1.jpg";
import product_view_img_2 from "../assets/product_view_img_2.jpg";
import product_view_img_3 from "../assets/product_view_img_3.jpg";
import product_view_img_4 from "../assets/product_view_img_4.jpg";
import product_view_img_5 from "../assets/product_view_img_5.jpg";

import user_icon from "../assets/user_icon.png";
import { useState } from "react";
import GoogleMap from "../components/map";

const ProductView = () => {
  const [isShowMore, setisShowMore] = useState(false);
  const Description = `Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.

  The residence is comprised of 5 bedrooms, 2 master bathrooms, 4 on-suite guest bathrooms, 2 powder rooms, 2 offices, 2 dressing rooms a media room, an oversized eat-in gourmet chef's kitchen, and a sprawling 1,100 square-foot Great Room perfectly situated in the prime southwest corner of the floor

  `;
  return (
    <div className="product_view_wrapper">
      <div className="container product_view_container">
        <section className="images_section">
          <img
            src={product_view_img_1}
            alt="product_view_img_4"
            className="img1"
          />
          <div className="images_section_2">
            <img
              src={product_view_img_2}
              alt="product_view_img_1"
              className="img2"
            />
            <img
              src={product_view_img_3}
              alt="product_view_img_2"
              className="img3"
            />
            <img
              src={product_view_img_4}
              alt="product_view_img_3"
              className="img4"
            />
            <img
              src={product_view_img_5}
              alt="product_view_img_3"
              className="img5"
            />
          </div>
        </section>
        <div className="product_view_descr">
          <main className="product_view_main_descrs">
            <section className="product_view_main_descr_about">
              <div className="product_view_main_descr_names">
                <div className="product_view_main_descr_names_headings">
                  <h1 className="product_view_main_descr_names_heading">
                    Luxury Family Loft by Victoria Park
                  </h1>
                  <p className="product_view_main_descr_names_paragraph">
                    Quincy St, Brooklyn, NY, USA
                  </p>
                </div>
                <div className="product_view_main_descr_names_btns">
                  <div className="product_view_main_descr_names_btns_share">
                    <button className="product_view_main_descr_names_btns_share_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_543_3192)">
                          <path
                            d="M11.1016 9.07812C10.2912 9.07812 9.57116 9.47193 9.12248 10.0781L5.25962 8.10403C5.32443 7.88386 5.35938 7.65103 5.35938 7.41016C5.35938 7.08392 5.29542 6.77239 5.17962 6.48722L9.22813 4.05478C9.67985 4.58497 10.3521 4.92188 11.1016 4.92188C12.4585 4.92188 13.5625 3.8179 13.5625 2.46094C13.5625 1.10398 12.4585 0 11.1016 0C9.7446 0 8.64062 1.10398 8.64062 2.46094C8.64062 2.77457 8.69971 3.07461 8.80715 3.3507L4.74852 5.78922C4.29713 5.27466 3.63511 4.94922 2.89844 4.94922C1.54148 4.94922 0.4375 6.0532 0.4375 7.41016C0.4375 8.76712 1.54148 9.87109 2.89844 9.87109C3.72209 9.87109 4.45244 9.46433 4.89937 8.84116L8.75101 10.8095C8.67929 11.0401 8.64062 11.2851 8.64062 11.5391C8.64062 12.896 9.7446 14 11.1016 14C12.4585 14 13.5625 12.896 13.5625 11.5391C13.5625 10.1821 12.4585 9.07812 11.1016 9.07812ZM11.1016 0.820312C12.0062 0.820312 12.7422 1.5563 12.7422 2.46094C12.7422 3.36558 12.0062 4.10156 11.1016 4.10156C10.1969 4.10156 9.46094 3.36558 9.46094 2.46094C9.46094 1.5563 10.1969 0.820312 11.1016 0.820312ZM2.89844 9.05078C1.9938 9.05078 1.25781 8.3148 1.25781 7.41016C1.25781 6.50552 1.9938 5.76953 2.89844 5.76953C3.80308 5.76953 4.53906 6.50552 4.53906 7.41016C4.53906 8.3148 3.80308 9.05078 2.89844 9.05078ZM11.1016 13.1797C10.1969 13.1797 9.46094 12.4437 9.46094 11.5391C9.46094 10.6344 10.1969 9.89844 11.1016 9.89844C12.0062 9.89844 12.7422 10.6344 12.7422 11.5391C12.7422 12.4437 12.0062 13.1797 11.1016 13.1797Z"
                            fill="#696969"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_543_3192">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <span>Share</span>
                  </div>
                  <div className="product_view_main_descr_names_btns_like">
                    <button className="product_view_main_descr_names_btns_like_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        fill="none"
                      >
                        <path
                          d="M13.7574 1.36542C12.1262 -0.186851 9.47106 -0.186851 7.83932 1.36506L7.50003 1.68733L7.16109 1.36521C5.52917 -0.186909 2.87443 -0.186733 1.24251 1.36521C0.44124 2.12734 0 3.13823 0 4.21137C0 5.28487 0.44124 6.29558 1.24263 7.05803L7.13771 12.6547C7.23911 12.7512 7.36966 12.7993 7.5 12.7993C7.63034 12.7993 7.76071 12.751 7.86229 12.6545L13.7574 7.05803C14.5586 6.29576 15 5.2849 15 4.21155C15 3.13823 14.5586 2.12751 13.7574 1.36542ZM13.0321 6.29488L7.5 11.5472L1.96808 6.29505C1.37771 5.73367 1.05264 4.99366 1.05264 4.21155C1.05264 3.42944 1.37771 2.68943 1.96808 2.12804C2.58387 1.54208 3.39264 1.24928 4.20158 1.24928C5.0107 1.24928 5.81982 1.54243 6.43562 2.12839L7.13736 2.7949C7.34051 2.98805 7.65929 2.98805 7.86246 2.7949L8.56438 2.12804C9.79614 0.956284 11.8002 0.956284 13.0319 2.12804C13.6221 2.68946 13.9474 3.42944 13.9474 4.21155C13.9474 4.99366 13.6221 5.73349 13.0321 6.29488Z"
                          fill="#696969"
                        />
                      </svg>
                    </button>
                    <span>Save</span>
                  </div>
                </div>
              </div>
              <div className="product_view_main_price_wrapper">
                <div className="product_view_main_price">
                  <div className="product_view_main_price_icons">
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
                    <span>4 Beds</span>
                  </div>
                  <div className="product_view_main_price_icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_532_3711)">
                        <path
                          d="M18.7622 11.0558C18.7622 10.7426 18.5082 10.4886 18.195 10.4886H17.0597V2.75501C17.0597 1.23589 15.8238 0 14.3047 0C12.7856 0 11.5497 1.23589 11.5497 2.75501V3.78902C11.5497 4.10226 11.8037 4.35624 12.1169 4.35624C12.4301 4.35624 12.6841 4.10226 12.6841 3.78902V2.75501C12.6841 1.86141 13.4111 1.13444 14.3047 1.13444C15.1983 1.13444 15.9253 1.86141 15.9253 2.75501V10.4886H0.805499C0.492258 10.4886 0.238281 10.7426 0.238281 11.0558C0.238281 13.6158 1.8574 15.8044 4.12527 16.6522C3.68901 17.1108 3.41919 17.7397 3.41919 18.4328C3.41919 18.746 3.67317 19 3.98641 19C4.29965 19 4.55363 18.746 4.55363 18.4328C4.55363 17.6583 5.1446 17.0282 5.87105 17.0282C5.89773 17.0282 13.1028 17.0282 13.1294 17.0282C13.8559 17.0282 14.4469 17.6583 14.4469 18.4328C14.4469 18.746 14.7009 19 15.0141 19C15.3274 19 15.5813 18.746 15.5813 18.4328C15.5813 17.7397 15.3115 17.1108 14.8753 16.6522C17.1431 15.8044 18.7622 13.6158 18.7622 11.0558ZM12.7898 15.8938H6.21068C3.73481 15.8938 1.68741 14.0245 1.40578 11.6231H17.5947C17.3131 14.0245 15.2656 15.8938 12.7898 15.8938Z"
                          fill="#696969"
                        />
                        <path
                          d="M12.1165 5.34082C11.8033 5.34082 11.5493 5.5948 11.5493 5.90804V6.39963C11.5493 6.71287 11.8033 6.96685 12.1165 6.96685C12.4298 6.96685 12.6838 6.71287 12.6838 6.39963V5.90804C12.6837 5.59476 12.4298 5.34082 12.1165 5.34082Z"
                          fill="#696969"
                        />
                        <path
                          d="M12.1165 8.06348C11.8033 8.06348 11.5493 8.31745 11.5493 8.63069V9.12228C11.5493 9.43552 11.8033 9.6895 12.1165 9.6895C12.4298 9.6895 12.6838 9.43552 12.6838 9.12228V8.63069C12.6837 8.31742 12.4298 8.06348 12.1165 8.06348Z"
                          fill="#696969"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_532_3711">
                          <rect width="19" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>5 Baths</span>
                  </div>
                  <div className="product_view_main_price_icons">
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
                        d="M16.6857 9.37793H13.6408C13.4176 9.37793 13.2349 9.56062 13.2349 9.78391V11.895C13.2349 12.1183 13.4176 12.301 13.6408 12.301H16.6857C16.909 12.301 17.0917 12.1183 17.0917 11.895V9.78391C17.0917 9.56062 16.909 9.37793 16.6857 9.37793ZM16.2797 11.489H14.0468V10.1899H16.2797V11.489Z"
                        fill="#696969"
                      />
                      <path
                        d="M11.4611 11.083H7.53928C7.31599 11.083 7.1333 11.2657 7.1333 11.489C7.1333 11.7123 7.31599 11.895 7.53928 11.895H11.4611C11.6844 11.895 11.8671 11.7123 11.8671 11.489C11.8671 11.2657 11.6844 11.083 11.4611 11.083Z"
                        fill="#696969"
                      />
                      <path
                        d="M11.4611 9.8252H7.53928C7.31599 9.8252 7.1333 10.0079 7.1333 10.2312C7.1333 10.4545 7.31599 10.6372 7.53928 10.6372H11.4611C11.6844 10.6372 11.8671 10.4545 11.8671 10.2312C11.8671 10.0079 11.6844 9.8252 11.4611 9.8252Z"
                        fill="#696969"
                      />
                    </svg>
                    <span>1 Garage</span>
                  </div>
                  <div className="product_view_main_price_icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_532_3737)">
                        <path
                          d="M16.149 0.146667L0.147593 16.1481C-0.165849 16.4616 0.0565081 17 0.500424 17H16.5019C16.7775 17 17.0009 16.7766 17.0009 16.501V0.499531C17.0009 0.0562469 16.463 -0.167208 16.149 0.146667ZM16.0029 16.002H1.70516L4.243 13.4641L4.93808 14.1592C5.03552 14.2567 5.16323 14.3054 5.29091 14.3054C5.7315 14.3054 5.95902 13.7688 5.64374 13.4535L4.94866 12.7584L6.37206 11.335L7.06714 12.0301C7.16458 12.1276 7.29229 12.1763 7.41997 12.1763C7.86056 12.1763 8.08807 11.6397 7.7728 11.3244L7.07775 10.6294L8.50115 9.20596L9.19623 9.90104C9.29367 9.99848 9.42138 10.0472 9.54906 10.0472C9.98965 10.0472 10.2172 9.51058 9.90189 9.19531L9.20684 8.50026L10.6302 7.07686L11.3253 7.77195C11.4228 7.86939 11.5505 7.91809 11.6782 7.91809C12.1187 7.91809 12.3463 7.38149 12.031 7.06622L11.3359 6.37117L12.7593 4.94777L13.4544 5.64285C13.5519 5.74029 13.6796 5.789 13.8072 5.789C14.2478 5.789 14.4753 5.2524 14.1601 4.93713L13.465 4.24208L16.0029 1.70423V16.002H16.0029Z"
                          fill="#696969"
                        />
                        <path
                          d="M12.9214 8.39667L8.3971 12.921C8.08366 13.2344 8.30602 13.7729 8.74994 13.7729H13.2743C13.5498 13.7729 13.7733 13.5494 13.7733 13.2738V8.74953C13.7733 8.30625 13.2353 8.08279 12.9214 8.39667ZM12.7753 12.7748H9.95467L12.7753 9.95423V12.7748Z"
                          fill="#696969"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_532_3737">
                          <rect width="17" height="17" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>1200 Sq Ft</span>
                  </div>
                  <div className="product_view_main_price_icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_532_3741)">
                        <path
                          d="M16.5508 1.48438H14.8438V0.59375C14.8438 0.265852 14.5779 0 14.25 0C13.9221 0 13.6562 0.265852 13.6562 0.59375V1.48438H5.34375V0.59375C5.34375 0.265852 5.07794 0 4.75 0C4.42206 0 4.15625 0.265852 4.15625 0.59375V1.48438H2.44922C1.0987 1.48438 0 2.58307 0 3.93359V16.5508C0 17.9013 1.0987 19 2.44922 19H16.5508C17.9013 19 19 17.9013 19 16.5508V3.93359C19 2.58307 17.9013 1.48438 16.5508 1.48438ZM2.44922 2.67188H4.15625V3.26562C4.15625 3.59352 4.42206 3.85938 4.75 3.85938C5.07794 3.85938 5.34375 3.59352 5.34375 3.26562V2.67188H13.6562V3.26562C13.6562 3.59352 13.9221 3.85938 14.25 3.85938C14.5779 3.85938 14.8438 3.59352 14.8438 3.26562V2.67188H16.5508C17.2465 2.67188 17.8125 3.23787 17.8125 3.93359V5.34375H1.1875V3.93359C1.1875 3.23787 1.75349 2.67188 2.44922 2.67188ZM16.5508 17.8125H2.44922C1.75349 17.8125 1.1875 17.2465 1.1875 16.5508V6.53125H17.8125V16.5508C17.8125 17.2465 17.2465 17.8125 16.5508 17.8125Z"
                          fill="#696969"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_532_3741">
                          <rect width="19" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Year Built: 1800</span>
                  </div>
                </div>
                <div className="product_view_main_price_title">
                  <div className="product_view_main_price_title_heading">
                    <del>$2,800/mo</del>
                    <h2>$7,500/mo</h2>
                  </div>
                  <p className="product_view_main_price_title_paragraph">
                    Est. Mortgage
                  </p>
                </div>
              </div>
              <div className="product_view_main_description">
                <h2 className="product_view_main_description_heading">
                  Description
                </h2>
                <p className="product_view_main_description_paragraph">
                  {Description.slice(0, isShowMore ? 2000 : 300)}
                </p>
                <button
                  onClick={() => setisShowMore(!isShowMore)}
                  className="product_view_main_description_btn"
                >
                  Show more
                </button>
              </div>
            </section>
            <hr />
            <section>
              <div>
                <h2>Location</h2>
                <ul>
                  <li>
                    <span>Address:</span>329 Queensberry Street
                  </li>
                  <li>
                    <span>State/County:</span>Washington
                  </li>
                  <li>
                    <span>City:</span>Jersey City
                  </li>
                  <li>
                    <span>Country:</span>United States
                  </li>
                </ul>
                <GoogleMap/>
              </div>
            </section>
          </main>
          <section className="contact_to_seller_section">
            <div className="contact_to_seller">
              <div className="contact_to_seller_user_profile">
                <img
                  src={user_icon}
                  alt=""
                  className="contact_to_seller_user_profile_img"
                />
                <div className="contact_to_seller_user_profile_titles">
                  <h3>Darrel Steward</h3>
                  <Link
                    target="_blank"
                    to={"https://diyorbektursunov570@gmail.com/"}
                  >
                    diyorbektursunov570@gmail.com
                  </Link>
                </div>
              </div>
              <div className="contact_to_seller_form_wrapper">
                <form className="contact_to_seller_form">
                  <label
                    htmlFor="userName"
                    className="contact_to_seller_form_label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    required
                    className="contact_to_seller_form_input"
                    placeholder="Name"
                  />
                  {/* Name */}
                  <label
                    htmlFor="PhoneNumber"
                    className="contact_to_seller_form_label"
                  >
                    Phone
                  </label>
                  <div className="contact_to_seller_form_phone">
                    <span className="contact_to_seller_form_phone_title">
                      +998
                    </span>
                    <input
                      className="contact_to_seller_form_input_phone_input"
                      required
                      type="number"
                      maxLength={9}
                      minLength={9}
                      id="PhoneNumber"
                      placeholder="Phone"
                    />
                  </div>
                  {/* Phone number */}
                  <label
                    htmlFor="userEmail"
                    className="contact_to_seller_form_label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="userEmail"
                    required
                    className="contact_to_seller_form_input"
                    placeholder="Email"
                  />
                  {/* email */}
                  <label
                    htmlFor="Message"
                    className="contact_to_seller_form_label_textarea"
                  >
                    Message
                  </label>
                  <textarea
                    className="contact_to_seller_form_textarea"
                    required
                    id="Message"
                    cols="30"
                    rows="5"
                    width="232px"
                  ></textarea>
                  {/* user massage to home seller */}
                  <div className="contact_to_seller_form_checkbox">
                    <label
                      htmlFor="checkbox"
                      className="contact_to_seller_form_label_checkbox"
                    >
                      By submitting this form I agree to Terms of Use
                    </label>
                    <input
                      type="checkbox"
                      id="checkbox"
                      required
                      className="contact_to_seller_form_checkbox_input"
                    />
                  </div>
                  <button className="contact_to_seller_form_btn">
                    Send request
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
