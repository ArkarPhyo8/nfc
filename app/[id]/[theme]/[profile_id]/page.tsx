import { notFound } from "next/navigation";
import { companyData } from "@/lib/data";
import Theme1Profile from "@/components/(landing)/op1/Theme1Profile";
import Theme2Profile from "@/components/(landing)/op2/Theme2Profile";

const page = async ({
  params,
}: {
  params: Promise<{ theme: string; profile_id: string }>;
}) => {
  const { theme, profile_id } = await params;

  const matchedCompany = companyData.find((card) => card.id === profile_id);
  if (!matchedCompany) {
    notFound();
  }

  switch (theme) {
    case "1":
      return <Theme1Profile companyInfo={matchedCompany} />;
    case "2":
      return <Theme2Profile companyInfo={matchedCompany} />;
    default:
      return null;
  }
};
export default page;
