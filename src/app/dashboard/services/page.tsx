import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { OtherServicesView } from "@/components/dashboard/other-services-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Services | Software & App Development | Crazy Tech Enterprise",
  description:
    "Explore Crazy Tech Enterprise services including Software Development, Mobile App Development (iOS/Android), Graphic Designing, Web Development, and API Integrations.",
};

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return <OtherServicesView />;
}
