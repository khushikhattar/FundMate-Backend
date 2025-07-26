import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const activateNextMilestone = async (campaignId: number) => {
  const milestones = await prisma.milestone.findMany({
    where: { campaignId },
    orderBy: { createdAt: "asc" },
  });

  const currentIndex = milestones.findIndex(
    (m) => m.isActive && m.amount >= m.goalAmount
  );

  if (currentIndex === -1 || currentIndex === milestones.length - 1) {
    return null;
  }

  await prisma.$transaction([
    prisma.milestone.update({
      where: { id: milestones[currentIndex].id },
      data: { isActive: false },
    }),
    prisma.milestone.update({
      where: { id: milestones[currentIndex + 1].id },
      data: { isActive: true },
    }),
  ]);

  return milestones[currentIndex + 1];
};

export { activateNextMilestone };
