import Counter from "./counter";

type ActivityReportTypes = {
  shopOwnersCount: number;
  loanAcceptedCount: number;
  transactionsCount: number;
  userCount: number;
};

const counterItems = [
  { key: "shopOwnersCount", description: "تعداد کسب و کارها" },
  { key: "loanAcceptedCount", description: "وام های پرداخت شده" },
  { key: "transactionsCount", description: "تعداد تراکنش ها" },
  { key: "userCount", description: "تعداد کاربران" },
];

const ActivitiesWrapper = async () => {
  let activities: ActivityReportTypes = {
    shopOwnersCount: 0,
    loanAcceptedCount: 0,
    transactionsCount: 0,
    userCount: 0,
  };

  const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
  let domain = ""; domain = "https://uranus.nakhll.com/api/";

  try {
    const res = await fetch(`${domain}public/activityreport`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch activity report");
    }

    activities = await res.json();
    console.log('aaaaaaaaaaazazaz', activities[counterItems[0].key as keyof ActivityReportTypes]);
    
  } catch (error) {
    console.error("Error fetching activity report:", error);
  }
  function smartRound(num: number): number {
    if (num < 100) {
      return Math.round(num / 10) * 10;
    }
  
    const magnitude = Math.pow(10, Math.floor(Math.log10(num)) - 1); // یک مرتبه پایین‌تر
   
    (magnitude)
    return Math.ceil(num / magnitude) * magnitude;
  }
  console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvv',Math.pow(10, Math.floor(Math.log10(172)) - 1));
  console.log(Math.ceil(172 / Math.pow(10, Math.floor(Math.log10(172)) - 1)) * Math.pow(10, Math.floor(Math.log10(172)) - 1));
  

  return (
    <>
      {counterItems.map((item,index) => (
        <Counter
          key={item.key}
          maximumValue={activities[item.key as keyof ActivityReportTypes]}
          description={item.description}
          startValue={0}
          durationSeconds={2}
          isLast={index === counterItems.length - 1}
        />
        
      ))}
    </>
  );
};

export default ActivitiesWrapper;
