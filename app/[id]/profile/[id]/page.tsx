


import { notFound } from "next/navigation";
import { cardData } from "@/lib/data";
import Option1 from "@/components/(landing)/op1/Option1";
import Option2 from "@/components/(landing)/op2/Option2";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const matchedCard = cardData.find((card) => card.cardUUID === id);
  if (!matchedCard) {
    notFound();
  }

  switch (matchedCard.themes) {
    case "1":
      return <Option1 cardData={matchedCard} />;
    case "2":
      return <Option2 cardData={matchedCard} />;
    default:
      return null;
  }
};
export default page;
