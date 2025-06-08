// // import React, { useRef, useState } from "react";
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/effect-cards";
// // import imageGolden from "@/../public/assets/images/wallet/golden.svg";
// // import imageSilver from "@/../public/assets/images/wallet/silver.svg";

// // // import required modules
// // import { EffectCards } from "swiper/modules";
// // import Image from "next/image";

// // const SwiperExample = () => {
// //   return (
// //     <div dir="rtl">
// //       <Swiper
// //         effect={"cards"}
// //         grabCursor={true}
// //         modules={[EffectCards]}
// //         className="mySwiper"
// //         loop
// //       >
// //         <SwiperSlide>
// //           <Image src={imageGolden} alt="ads" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           {" "}
// //           <Image src={imageSilver} alt="ads" />
// //         </SwiperSlide>
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default SwiperExample;
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/pagination";

// // import required modules
// import { EffectCube, Pagination,Navigation } from "swiper/modules";

// import imageGolden from "@/../public/assets/images/wallet/golden.svg";
// import imageSilver from "@/../public/assets/images/wallet/silver.svg";
// import Image from "next/image";
// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={"cube"}
//         grabCursor={true}
//         cubeEffect={{
//           shadow: false,
//           slideShadows: false,
//           shadowOffset: 0,
//           shadowScale: 0,
//         }}
//         pagination={true}
//         modules={[EffectCube,Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Image src={imageGolden} alt="ads" fill className="object-cover" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={imageSilver} alt="ads" fill className="object-cover" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={imageGolden} alt="ads" fill className="object-cover" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={imageSilver} alt="ads" fill className="object-cover" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { EffectCreative } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-42%', 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
     
    </>
  );
}
