import SectionTitle from "./home-page-title";
import { Suspense } from "react";
// import ActivitySkeleton from "../(home-page-skeletons)/activity-skeletons";
import ActivitiesWrapper from "./activities-wrapper";

const Activities = () => {
  return (
    <section>
      <SectionTitle title="گزارش فعالیت های اورانوس" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-5 md:pt-10 place-content-center max-w-max mx-auto">
          <ActivitiesWrapper />
        {/* <Suspense fallback={<ActivitySkeleton />}>
        </Suspense> */}
      </div>
    </section>
  );
};
export default Activities;
