import React from 'react'


const Logo = () => {
    return (
        <div className='flex gap-5 justify-center hover:scale-110 ease-in-out duration-200'>

            {/* <svg width="57" height="51" viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_14_111)">
                    <path d="M48.6644 30.5871C48.6179 28.9783 48.6274 27.3668 48.6465 25.7566C48.6525 25.1372 48.5536 24.7146 47.8962 24.4902C47.6366 24.4023 47.3876 23.8708 47.3519 23.5178C47.1899 21.8774 46.4563 20.7908 44.9223 20.3499C43.0942 19.825 41.2637 19.3 39.4438 18.7252C39.1568 18.6334 38.7805 18.3132 38.7293 18.0363C38.5554 17.1465 37.9754 17.0284 37.3108 17.0389C35.6863 17.0639 34.0618 17.1452 32.4373 17.1544C31.1241 17.1614 29.8109 17.1662 28.4976 17.1689C27.1844 17.1715 25.8711 17.1667 24.5579 17.1544C22.9334 17.1452 21.3089 17.0639 19.6844 17.0389C19.0186 17.0284 18.4398 17.1465 18.266 18.0363C18.2112 18.3132 17.836 18.6334 17.5514 18.7252C15.7363 19.3 13.907 19.825 12.0729 20.3499C10.5401 20.7908 9.81004 21.8774 9.6433 23.5178C9.60877 23.8708 9.35985 24.4023 9.10022 24.4902C8.4428 24.7146 8.34276 25.1372 8.34991 25.7566C8.36777 27.3668 8.3773 28.9783 8.33085 30.5871C8.31656 31.0766 8.37492 31.3745 8.83225 31.5792C9.37414 31.8155 9.58375 32.2656 9.70881 32.9086C10.0197 34.5083 10.8998 35.7222 12.4207 36.2051C14.6716 36.919 16.9368 37.583 19.2164 38.1972C20.929 38.6631 21.9234 38.1604 22.7607 36.5122C24.0303 34.0188 25.2772 31.5044 26.5516 29.0098C26.7378 28.6655 26.9689 28.3534 27.2376 28.0833C27.6461 27.6568 28.0808 27.4271 28.5 27.3825C28.9192 27.4245 29.3539 27.6568 29.7612 28.0833C30.0289 28.3529 30.2588 28.6647 30.4437 29.0084C31.718 31.5018 32.965 34.0136 34.2345 36.5109C35.0682 38.1591 36.0674 38.6617 37.7789 38.1959C40.056 37.5765 42.3216 36.9124 44.5758 36.2038C46.0966 35.7209 46.9768 34.507 47.2876 32.9073C47.4067 32.2643 47.6211 31.8141 48.1642 31.5779C48.6203 31.3811 48.6787 31.0766 48.6644 30.5871ZM26.0525 24.7618C24.6234 27.7578 23.0954 30.7013 21.7186 33.7235C20.7849 35.7734 19.4641 35.9217 18.0111 35.524C16.5581 35.1264 15.1444 34.5989 13.7236 34.0805C12.2039 33.5228 11.4726 32.3561 11.481 30.6501C11.481 29.2315 11.481 27.8116 11.481 26.1883C11.4965 26.1254 11.5046 26.0606 11.5048 25.9954C11.4988 23.2396 12.3075 22.321 14.8622 22.1044C15.8328 22.0244 16.7975 21.8616 17.7681 21.7803C20.081 21.5848 22.3939 21.3997 24.7091 21.2436C25.9001 21.1635 26.4622 21.9115 26.4599 23.09C26.4433 23.6745 26.3039 24.2468 26.0525 24.7618V24.7618ZM43.2704 34.0792C41.8544 34.6041 40.4359 35.129 38.9829 35.5227C37.53 35.9164 36.2104 35.772 35.2766 33.7222C33.8999 30.7039 32.3695 27.7565 30.9427 24.7605C30.6882 24.2445 30.5463 23.6703 30.5282 23.0834C30.5282 21.9023 31.0868 21.1569 32.2801 21.237C34.5954 21.3932 36.9083 21.5782 39.2199 21.7737C40.1906 21.8551 41.1565 22.0178 42.1271 22.0979C44.6865 22.3091 45.4952 23.2369 45.4952 25.9901C45.4948 26.0554 45.5028 26.1203 45.519 26.1831C45.519 27.8103 45.519 29.2302 45.519 30.6449C45.5214 32.3548 44.7901 33.5215 43.2704 34.0792Z" fill="white" stroke="white" stroke-miterlimit="10" />
                    <path d="M28.3654 28.5728C26.7993 28.5728 23.8623 36.1736 24.0934 36.5555C24.2125 36.7458 26.3205 35.8363 28.4488 35.8272C30.6104 35.818 32.7899 36.7051 32.9066 36.5555C33.1388 36.2589 29.9303 28.5728 28.3654 28.5728Z" fill="white" stroke="white" stroke-miterlimit="10" />
                    <path d="M37.8372 40.4989L33.6688 39.1866C33.0369 38.3397 32.2426 37.6576 31.3429 37.1892C30.4432 36.7209 29.4605 36.478 28.4655 36.478C27.4704 36.478 26.4878 36.7209 25.5881 37.1892C24.6884 37.6576 23.894 38.3397 23.2621 39.1866L19.127 40.4989C18.3767 40.6905 17.7598 41.0357 17.7598 41.848L17.605 46.5723C17.605 47.3846 18.179 48.4252 18.9448 48.4252H23.4062C24.6127 48.4252 26.4265 50.9357 28.4571 50.9357C30.4877 50.9357 32.298 48.4239 33.5033 48.4239H37.9647C38.7317 48.4239 39.3998 47.3833 39.3998 46.571L39.245 41.9845C39.245 41.1722 38.5947 40.7509 37.8372 40.4989ZM28.4059 48.9069C25.5214 48.9069 23.1823 46.4266 23.1823 43.3676C23.1823 40.3087 25.5214 37.8284 28.4059 37.8284C31.2905 37.8284 33.6307 40.3087 33.6307 43.3676C33.6307 46.4266 31.2916 48.9069 28.4059 48.9069Z" fill="white" stroke="white" stroke-miterlimit="10" />
                    <path d="M28.4059 48.315C30.9067 48.315 32.934 46.1658 32.934 43.5146C32.934 40.8634 30.9067 38.7142 28.4059 38.7142C25.9051 38.7142 23.8778 40.8634 23.8778 43.5146C23.8778 46.1658 25.9051 48.315 28.4059 48.315Z" fill="white" stroke="white" stroke-miterlimit="10" />
                    <path d="M2.42246 26.1345C2.42246 21.0165 5.53924 16.4116 10.5366 13.1427C10.9912 11.9225 11.5357 10.7454 12.1646 9.62311C4.84371 13.2752 0.0595703 19.3079 0.0595703 26.1345C0.0595703 33.7655 6.03826 40.4058 14.8538 43.8309C15.441 44.0579 16.0448 45.9857 16.651 46.1838V41.8139C8.20464 38.8441 2.42246 33.0989 2.42246 26.1345Z" fill="white" stroke="white" stroke-miterlimit="10" />
                    <path d="M44.8354 9.62704C45.4643 10.7493 46.0088 11.9265 46.4635 13.1466C51.4655 16.4116 54.5764 21.0205 54.5764 26.1384C54.5764 33.1028 48.7942 38.852 40.349 41.8178V46.1878C41.0636 45.9542 41.771 43.9857 42.457 43.7115C51.1023 40.2483 56.9405 33.675 56.9405 26.1345C56.9405 19.3079 52.1551 13.2752 44.8354 9.62704Z" fill="white" stroke="white" stroke-miterlimit="10" />
                    <path d="M10.7855 19.2607C12.7577 18.6937 14.7312 18.1281 16.6891 17.5074C17 17.409 17.4037 17.0626 17.4633 16.7647C17.6514 15.8041 18.2755 15.6781 18.9937 15.6886C20.7456 15.7161 22.4975 15.8027 24.2494 15.8198C25.6667 15.8277 27.0836 15.8329 28.5 15.8355C29.9165 15.8382 31.3337 15.8307 32.7518 15.8132C34.5049 15.8027 36.2556 15.7161 38.0088 15.682C38.7233 15.6715 39.351 15.7975 39.5392 16.7581C39.5975 17.056 40.0024 17.4024 40.3121 17.5009C42.2701 18.1216 44.2423 18.6819 46.2169 19.2541C46.6538 19.3724 47.0691 19.5721 47.4448 19.8446C46.1729 8.67694 38.1767 0.0656128 28.5 0.0656128C18.8234 0.0656128 10.8272 8.67694 9.5564 19.8512C9.93273 19.579 10.3484 19.3793 10.7855 19.2607Z" fill="white" stroke="white" stroke-miterlimit="10" />
                </g>
                <defs>
                    <clipPath id="clip0_14_111">
                        <rect width="57" height="51" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div className='my-auto flex'>
                <svg className='w-1/2 h-1/3' viewBox="0 0 154 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6477 7.42045C13.5568 6.50379 13.1667 5.79167 12.4773 5.28409C11.7879 4.77651 10.8523 4.52273 9.67045 4.52273C8.86742 4.52273 8.18939 4.63636 7.63636 4.86364C7.08333 5.08333 6.65909 5.39015 6.36364 5.78409C6.07576 6.17803 5.93182 6.625 5.93182 7.125C5.91667 7.54167 6.00379 7.9053 6.19318 8.21591C6.39015 8.52652 6.65909 8.79545 7 9.02273C7.34091 9.24242 7.73485 9.43561 8.18182 9.60227C8.62879 9.76136 9.10606 9.89773 9.61364 10.0114L11.7045 10.5114C12.7197 10.7386 13.6515 11.0417 14.5 11.4205C15.3485 11.7992 16.0833 12.2652 16.7045 12.8182C17.3258 13.3712 17.8068 14.0227 18.1477 14.7727C18.4962 15.5227 18.6742 16.3826 18.6818 17.3523C18.6742 18.7765 18.3106 20.0114 17.5909 21.0568C16.8788 22.0947 15.8485 22.9015 14.5 23.4773C13.1591 24.0455 11.5417 24.3295 9.64773 24.3295C7.76894 24.3295 6.13258 24.0417 4.73864 23.4659C3.35227 22.8902 2.26894 22.0379 1.48864 20.9091C0.715909 19.7727 0.310606 18.3674 0.272727 16.6932H5.03409C5.08712 17.4735 5.31061 18.125 5.70455 18.6477C6.10606 19.1629 6.64015 19.553 7.30682 19.8182C7.98106 20.0758 8.74242 20.2045 9.59091 20.2045C10.4242 20.2045 11.1477 20.0833 11.7614 19.8409C12.3826 19.5985 12.8636 19.2614 13.2045 18.8295C13.5455 18.3977 13.7159 17.9015 13.7159 17.3409C13.7159 16.8182 13.5606 16.3788 13.25 16.0227C12.947 15.6667 12.5 15.3636 11.9091 15.1136C11.3258 14.8636 10.6098 14.6364 9.76136 14.4318L7.22727 13.7955C5.26515 13.3182 3.71591 12.572 2.57955 11.5568C1.44318 10.5417 0.878788 9.17424 0.886364 7.45454C0.878788 6.04545 1.25379 4.81439 2.01136 3.76136C2.77652 2.70833 3.82576 1.88636 5.15909 1.29545C6.49242 0.704545 8.00758 0.40909 9.70455 0.40909C11.4318 0.40909 12.9394 0.704545 14.2273 1.29545C15.5227 1.88636 16.5303 2.70833 17.25 3.76136C17.9697 4.81439 18.3409 6.03409 18.3636 7.42045H13.6477ZM29.7869 24.3409C27.9991 24.3409 26.4612 23.9621 25.1733 23.2045C23.893 22.4394 22.9081 21.3788 22.2188 20.0227C21.5369 18.6667 21.196 17.1061 21.196 15.3409C21.196 13.553 21.5407 11.9848 22.2301 10.6364C22.9271 9.2803 23.9157 8.22348 25.196 7.46591C26.4763 6.70076 27.9991 6.31818 29.7642 6.31818C31.2869 6.31818 32.6203 6.5947 33.7642 7.14773C34.9081 7.70076 35.8134 8.47727 36.4801 9.47727C37.1468 10.4773 37.5142 11.6515 37.5824 13H33.0142C32.8854 12.1288 32.5445 11.428 31.9915 10.8977C31.446 10.3598 30.7301 10.0909 29.8438 10.0909C29.0938 10.0909 28.4384 10.2955 27.8778 10.7045C27.3248 11.1061 26.893 11.6932 26.5824 12.4659C26.2718 13.2386 26.1165 14.1742 26.1165 15.2727C26.1165 16.3864 26.268 17.3333 26.571 18.1136C26.8816 18.8939 27.3172 19.4886 27.8778 19.8977C28.4384 20.3068 29.0938 20.5114 29.8438 20.5114C30.3968 20.5114 30.893 20.3977 31.3324 20.1705C31.7794 19.9432 32.1468 19.6136 32.4347 19.1818C32.7301 18.7424 32.9233 18.2159 33.0142 17.6023H37.5824C37.5066 18.9356 37.143 20.1098 36.4915 21.125C35.8475 22.1326 34.9574 22.9205 33.821 23.4886C32.6847 24.0568 31.34 24.3409 29.7869 24.3409ZM51.875 16.5682V6.54545H56.7159V24H52.0682V20.8295H51.8864C51.4924 21.8523 50.8371 22.6742 49.9205 23.2955C49.0114 23.9167 47.9015 24.2273 46.5909 24.2273C45.4242 24.2273 44.3977 23.9621 43.5114 23.4318C42.625 22.9015 41.9318 22.1477 41.4318 21.1705C40.9394 20.1932 40.6894 19.0227 40.6818 17.6591V6.54545H45.5227V16.7955C45.5303 17.8258 45.8068 18.6402 46.3523 19.2386C46.8977 19.8371 47.6288 20.1364 48.5455 20.1364C49.1288 20.1364 49.6742 20.0038 50.1818 19.7386C50.6894 19.4659 51.0985 19.0644 51.4091 18.5341C51.7273 18.0038 51.8826 17.3485 51.875 16.5682ZM60.679 24V0.727272H65.5199V9.47727H65.6676C65.8797 9.00758 66.1866 8.5303 66.5881 8.04545C66.9972 7.55303 67.5275 7.14394 68.179 6.81818C68.8381 6.48485 69.6563 6.31818 70.6335 6.31818C71.9063 6.31818 73.0805 6.65152 74.1562 7.31818C75.232 7.97727 76.0919 8.97348 76.7358 10.3068C77.3797 11.6326 77.7017 13.2955 77.7017 15.2955C77.7017 17.2424 77.3873 18.8864 76.7585 20.2273C76.1373 21.5606 75.2888 22.572 74.2131 23.2614C73.1449 23.9432 71.9479 24.2841 70.6222 24.2841C69.6828 24.2841 68.8835 24.1288 68.2244 23.8182C67.5729 23.5076 67.0388 23.1174 66.6222 22.6477C66.2055 22.1705 65.8873 21.6894 65.6676 21.2045H65.4517V24H60.679ZM65.4176 15.2727C65.4176 16.3106 65.5616 17.2159 65.8494 17.9886C66.1373 18.7614 66.554 19.3636 67.0994 19.7955C67.6449 20.2197 68.3078 20.4318 69.0881 20.4318C69.8759 20.4318 70.5426 20.2159 71.0881 19.7841C71.6335 19.3447 72.0464 18.7386 72.3267 17.9659C72.6146 17.1856 72.7585 16.2879 72.7585 15.2727C72.7585 14.2652 72.6184 13.3788 72.3381 12.6136C72.0578 11.8485 71.6449 11.25 71.0994 10.8182C70.554 10.3864 69.8835 10.1705 69.0881 10.1705C68.3002 10.1705 67.6335 10.3788 67.0881 10.7955C66.5502 11.2121 66.1373 11.803 65.8494 12.5682C65.5616 13.3333 65.4176 14.2348 65.4176 15.2727ZM85.9091 24.3295C84.7955 24.3295 83.803 24.1364 82.9318 23.75C82.0606 23.3561 81.3712 22.7765 80.8636 22.0114C80.3636 21.2386 80.1136 20.2765 80.1136 19.125C80.1136 18.1553 80.2917 17.3409 80.6477 16.6818C81.0038 16.0227 81.4886 15.4924 82.1023 15.0909C82.7159 14.6894 83.4129 14.3864 84.1932 14.1818C84.9811 13.9773 85.8068 13.8333 86.6705 13.75C87.6856 13.6439 88.5038 13.5455 89.125 13.4545C89.7462 13.3561 90.197 13.2121 90.4773 13.0227C90.7576 12.8333 90.8977 12.553 90.8977 12.1818V12.1136C90.8977 11.3939 90.6705 10.8371 90.2159 10.4432C89.7689 10.0492 89.1326 9.85227 88.3068 9.85227C87.4356 9.85227 86.7424 10.0455 86.2273 10.4318C85.7121 10.8106 85.3712 11.2879 85.2045 11.8636L80.7273 11.5C80.9545 10.4394 81.4015 9.52273 82.0682 8.75C82.7348 7.9697 83.5947 7.37121 84.6477 6.95454C85.7083 6.5303 86.9356 6.31818 88.3295 6.31818C89.2992 6.31818 90.2273 6.43182 91.1136 6.65909C92.0076 6.88636 92.7992 7.23864 93.4886 7.71591C94.1856 8.19318 94.7348 8.80682 95.1364 9.55682C95.5379 10.2992 95.7386 11.1894 95.7386 12.2273V24H91.1477V21.5795H91.0114C90.7311 22.125 90.3561 22.6061 89.8864 23.0227C89.4167 23.4318 88.8523 23.7538 88.1932 23.9886C87.5341 24.2159 86.7727 24.3295 85.9091 24.3295ZM87.2955 20.9886C88.0076 20.9886 88.6364 20.8485 89.1818 20.5682C89.7273 20.2803 90.1553 19.8939 90.4659 19.4091C90.7765 18.9242 90.9318 18.375 90.9318 17.7614V15.9091C90.7803 16.0076 90.572 16.0985 90.3068 16.1818C90.0492 16.2576 89.7576 16.3295 89.4318 16.3977C89.1061 16.4583 88.7803 16.5152 88.4545 16.5682C88.1288 16.6136 87.8333 16.6553 87.5682 16.6932C87 16.7765 86.5038 16.9091 86.0795 17.0909C85.6553 17.2727 85.3258 17.5189 85.0909 17.8295C84.8561 18.1326 84.7386 18.5114 84.7386 18.9659C84.7386 19.625 84.9773 20.1288 85.4545 20.4773C85.9394 20.8182 86.553 20.9886 87.2955 20.9886Z" fill="#81ACDE" />
                    <path d="M99.5852 24V0.727272H114.994V4.78409H104.506V10.3295H113.972V14.3864H104.506V24H99.5852ZM128.312 16.5682V6.54545H133.153V24H128.506V20.8295H128.324C127.93 21.8523 127.275 22.6742 126.358 23.2955C125.449 23.9167 124.339 24.2273 123.028 24.2273C121.862 24.2273 120.835 23.9621 119.949 23.4318C119.063 22.9015 118.369 22.1477 117.869 21.1705C117.377 20.1932 117.127 19.0227 117.119 17.6591V6.54545H121.96V16.7955C121.968 17.8258 122.244 18.6402 122.79 19.2386C123.335 19.8371 124.066 20.1364 124.983 20.1364C125.566 20.1364 126.112 20.0038 126.619 19.7386C127.127 19.4659 127.536 19.0644 127.847 18.5341C128.165 18.0038 128.32 17.3485 128.312 16.5682ZM141.866 13.9091V24H137.026V6.54545H141.639V9.625H141.844C142.23 8.60985 142.878 7.80682 143.787 7.21591C144.696 6.61742 145.798 6.31818 147.094 6.31818C148.306 6.31818 149.363 6.58333 150.264 7.11364C151.166 7.64394 151.866 8.40151 152.366 9.38636C152.866 10.3636 153.116 11.5303 153.116 12.8864V24H148.276V13.75C148.283 12.6818 148.01 11.8485 147.457 11.25C146.904 10.6439 146.143 10.3409 145.173 10.3409C144.522 10.3409 143.946 10.4811 143.446 10.7614C142.954 11.0417 142.567 11.4508 142.287 11.9886C142.014 12.5189 141.874 13.1591 141.866 13.9091Z" fill="white" />
                </svg>

            </div> */}
        </div>
    )
}

export default Logo