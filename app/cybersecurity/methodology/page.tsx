import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services";

export default function Page() {
  return <ServicePage service={services["methodology"]} />;
}
