export default function MobileFeatures() {
  const features = [
    {
      title: "چرا تسهیلات اورانوس را انتخاب کنیم؟",
      description: "۲۰۰میلیون سقف تسهیلات!",
      subText: "ضریب ۱۰ برابری معدل و انتقال تسهیلات قرض الحسنه",
      accentColor: "bg-orange-500",
    },
    {
      title: "تسهیلات قرض الحسنه ۳ درصدی",
      description: "ثبت نام و دریافت کارگزینی",
      subText: "اندرویدی بازار اجتماعی نخل",
      accentColor: "bg-blue-500",
    },
    {
      title: "۳۰روزه امتیاز ثابت و سیار!",
      description: "انجام تراکنش های شما به مدت",
      subText: "یک ماه",
      accentColor: "bg-red-500",
    },
    {
      title: "!بدون نیاز خرید تسهیلات",
      description: "محاسبه معدل بر اساس",
      subText: "تراکنش های انجام شده",
      accentColor: "bg-green-500",
    },
  ];

  return (
    <div className="px-[34px]">
      <div dir="rtl" className="grid grid-cols-2 gap-3 p-4 bg-slate-500">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white rounded-lg shadow"
          >
            <div
              className={`absolute top-0 left-0 right-0 h-1 ${feature.accentColor}`}
            />
            <div className="p-4">
              <h3 className="mb-3 text-sm font-bold leading-tight">
                {feature.title}
              </h3>
              <p className="mb-2 text-xs text-gray-600">
                {feature.description}
              </p>
              <div className="my-3 border-t border-gray-200" />
              <p className="text-xs text-gray-600">{feature.subText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
