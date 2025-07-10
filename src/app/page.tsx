import AWSIAMServicesTable from "@/components/aws-iam-services";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AWSIAMServicesTable />
    </Suspense>
  );
}
