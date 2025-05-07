// import { useState } from "react";

// const steps = [
//   { id: 1, label: "مشخصات فردی" },
//   { id: 2, label: "اطلاعات محل کار" },
//   { id: 3, label: "سایر دستگاه کارتخوان" },
//   { id: 4, label: "تأیید شرایط و ضوابط نخل" },
// ];

// export default function MultiStepForm() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     device: "",
//     terms: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
//   const handleSubmit = () => alert("فرم با موفقیت ارسال شد!");

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//       {/* نوار پیشرفت */}
//       <div className="flex items-center justify-between mb-6">
//         {steps.map((step, index) => (
//           <div key={step.id} className="flex items-center">
//             <div
//               className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
//                 currentStep >= step.id ? "bg-orange-500" : "bg-gray-300"
//               }`}
//             >
//               {step.id}
//             </div>
//             {index < steps.length - 1 && (
//               <div
//                 className={`w-16 h-1 ${currentStep > step.id ? "bg-orange-500" : "bg-gray-300"}`}
//               ></div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* فرم‌های مختلف بسته به مرحله */}
//       {currentStep === 1 && (
//         <div>
//           <h2 className="text-lg font-bold mb-4">مشخصات فردی</h2>
//           <input
//             type="text"
//             name="name"
//             placeholder="نام و نام خانوادگی"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-3"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="ایمیل"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       )}

//       {currentStep === 2 && (
//         <div>
//           <h2 className="text-lg font-bold mb-4">اطلاعات محل کار</h2>
//           <input
//             type="text"
//             name="company"
//             placeholder="نام شرکت"
//             value={formData.company}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       )}

//       {currentStep === 3 && (
//         <div>
//           <h2 className="text-lg font-bold mb-4">سایر دستگاه کارتخوان</h2>
//           <input
//             type="text"
//             name="device"
//             placeholder="مدل دستگاه کارتخوان"
//             value={formData.device}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       )}

//       {currentStep === 4 && (
//         <div>
//           <h2 className="text-lg font-bold mb-4">تأیید شرایط و ضوابط نخل</h2>
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               name="terms"
//               checked={formData.terms}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             موافقم
//           </label>
//         </div>
//       )}

//       {/* دکمه‌های جابجایی */}
//       <div className="flex justify-between mt-6">
//         {currentStep > 1 && (
//           <button onClick={prevStep} className="bg-gray-400 text-white py-2 px-4 rounded">
//             قبلی
//           </button>
//         )}
//         {currentStep < steps.length ? (
//           <button onClick={nextStep} className="bg-orange-500 text-white py-2 px-4 rounded">
//             بعدی
//           </button>
//         ) : (
//           <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded">
//             ارسال فرم
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

export default function MultiStepForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    device: "",
    terms: false,
  });

  // بررسی پر شدن هر بخش از فرم
  const isStepCompleted = {
    step1: formData.name.trim() !== "" && formData.email.trim() !== "",
    step2: formData.company.trim() !== "",
    step3: formData.device.trim() !== "",
    step4: formData.terms,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("فرم با موفقیت ارسال شد!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* نوار پیشرفت */}
      <div className="flex justify-between items-center mb-6">
        {[
          { id: 1, label: "مشخصات فردی", completed: isStepCompleted.step1 },
          { id: 2, label: "اطلاعات محل کار", completed: isStepCompleted.step2 },
          { id: 3, label: "سایر دستگاه کارتخوان", completed: isStepCompleted.step3 },
          { id: 4, label: "تأیید شرایط", completed: isStepCompleted.step4 },
        ].map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
                step.completed ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              {step.id}
            </div>
            {index < 3 && <div className={`w-16 h-1 ${step.completed ? "bg-green-500" : "bg-gray-300"}`}></div>}
          </div>
        ))}
      </div>

      {/* فرم‌ها */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* فرم ۱: مشخصات فردی */}
        <div>
          <h2 className="text-lg font-bold mb-2">مشخصات فردی</h2>
          <input
            type="text"
            name="name"
            placeholder="نام و نام خانوادگی"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* فرم ۲: اطلاعات محل کار */}
        <div>
          <h2 className="text-lg font-bold mb-2">اطلاعات محل کار</h2>
          <input
            type="text"
            name="company"
            placeholder="نام شرکت"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* فرم ۳: سایر دستگاه‌های کارتخوان */}
        <div>
          <h2 className="text-lg font-bold mb-2">سایر دستگاه‌های کارتخوان</h2>
          <input
            type="text"
            name="device"
            placeholder="مدل دستگاه کارتخوان"
            value={formData.device}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* فرم ۴: تأیید شرایط */}
        <div>
          <h2 className="text-lg font-bold mb-2">تأیید شرایط و ضوابط</h2>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
            />
            موافقم
          </label>
        </div>

        {/* دکمه ارسال فرم */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          ارسال فرم
        </button>
      </form>
    </div>
  );
}
