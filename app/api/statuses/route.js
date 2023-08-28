// delete the following lines after completing the route
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Use this import statement after completing this route
// import { prisma } from "../../../lib/prisma";

// fetch all status
export const GET = async () => {
  const projectStatus = await prisma.fundingStatus.findMany();

  if (projectStatus.length === 0) {
    return new Response(JSON.stringify({ message: "No status found!" }));
  }

  return new Response(JSON.stringify(projectStatus), { status: 200 });
};

// Create new status
export const POST = async (req) => {
  const { title } = await req.json();

  const checkStatusTitleExists = await prisma.fundingStatus.findFirst({
    where: { title: title },
  });

  try {
    if (!checkStatusTitleExists) {
      const newProjectStatus = await prisma.fundingStatus.create({
        data: {
          title,
        },
      });

      return new Response(JSON.stringify(newProjectStatus), {
        status: 201,
      });
    }

    return new Response(
      JSON.stringify({
        message: "Status already exists.",
      }),
      { status: 400 }
    );
  } catch (error) {
    console.log("an error occured", error);
  }
};

// Delete single Status
export const DELETE = async (req) => {
  const { id } = await req.json();

  const dbId = await prisma.fundingStatus.findFirst({
    where: {
      id: id,
    },
  });

  if (!dbId) {
    return new Response(JSON.stringify({ message: "Status does not exist" }), {
      status: 404,
    });
  }

  await prisma.fundingStatus.delete({
    where: { id: id },
    select: {
      title: true,
    },
  });

  return new Response(JSON.stringify({ message: "status deleted" }), {
    status: 201,
  });
};

// update status name not working
export const PATCH = async (req) => {
  const { id, title } = await req.json();

  const fundingStatus = await prisma.fundingStatus.findFirst({
    where: { id: id },
  });

  if (fundingStatus.title === title)
    return new Response(JSON.stringify({ message: "No changes made" }), {
      status: 201,
    });

  if (fundingStatus !== null) {
    const updatedFundingStatus = await prisma.fundingStatus.update({
      where: { id: id },
      data: {
        title: title,
      },
    });

    return new Response(JSON.stringify(updatedFundingStatus), { status: 200 });
  }

  return new Response(JSON.stringify({ message: "Status does not exist" }), {
    status: 404,
  });
};
